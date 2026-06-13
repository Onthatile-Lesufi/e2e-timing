import { useContext, useEffect, useState } from "react";
import { GetMeetAthletes } from "../services/EventServices";
import PaginationButton from "../components/PaginationButton";
import { ActionContext } from "../pages/Event";

const EventAthleteSection = () => {
    const [athletes, setAthletes] = useState([]);
    const [filterAthletes, setFilterAthletes] = useState([]);
    const [displayAthletes, setDisplayAthletes] = useState([]);
    const [pageButtons, setPageButtons] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [maxPages, setMaxPages] = useState(1);
    const [displayNum, setDisplayNum] = useState(25);
    const triggerParentAction = useContext(ActionContext);

    function GetDisplayAthletes() {
        const _max = Math.ceil(filterAthletes.length / displayNum) || 1;
        setMaxPages(_max);

        // Safeguard: Clamp current page if dynamic filtering shrinks the dataset
        let _currentPage = pageNum;
        if (_currentPage >= _max) {
            _currentPage = Math.max(0, _max - 1);
            setPageNum(_currentPage);
        }

        let _start = _currentPage * displayNum;
        let _end = _start + displayNum;
        
        setDisplayAthletes(filterAthletes.slice(_start, _end));
    }

    async function GetAthletes() {
        const _athletes = await GetMeetAthletes();
        setAthletes(_athletes);
        setFilterAthletes(_athletes);
    }

    function SetPagination() {
        let _buttons = [];

        // Scenario A: Total pages are 5 or fewer -> render exactly how many exist
        if (maxPages <= 5) {
            for (let i = 0; i < maxPages; i++) {
                _buttons.push(
                    <PaginationButton key={`page-${i}`} page={i} passThrough={GoToPage} label={i + 1} isActive={pageNum === i} />
                );
            }
        } else {
            // Scenario B: More than 5 pages -> Symmetrical windowing with persistent anchors
            
            // Always establish the first page anchor
            _buttons.push(<PaginationButton key="page-0" page={0} passThrough={GoToPage} label={1} isActive={pageNum === 0} />);

            if (pageNum < 3) {
                // Near the beginning of the pages array
                for (let i = 1; i <= 3; i++) {
                    _buttons.push(<PaginationButton key={`page-${i}`} page={i} passThrough={GoToPage} label={i + 1} isActive={pageNum === i} />);
                }
                _buttons.push(<button key="dots-right" className="join-item btn" disabled={true}>...</button>);
            } else if (pageNum > maxPages - 4) {
                // Near the end of the pages array
                _buttons.push(<button key="dots-left" className="join-item btn" disabled={true}>...</button>);
                for (let i = maxPages - 4; i < maxPages - 1; i++) {
                    _buttons.push(<PaginationButton key={`page-${i}`} page={i} passThrough={GoToPage} label={i + 1} isActive={pageNum === i} />);
                }
            } else {
                // Symmetrical window floating in the middle
                _buttons.push(<button key="dots-left" className="join-item btn" disabled={true}>...</button>);
                _buttons.push(<PaginationButton key={`page-${pageNum - 1}`} page={pageNum - 1} passThrough={GoToPage} label={pageNum} isActive={false} />);
                _buttons.push(<PaginationButton key={`page-${pageNum}`} page={pageNum} passThrough={GoToPage} label={pageNum + 1} isActive={true} />);
                _buttons.push(<PaginationButton key={`page-${pageNum + 1}`} page={pageNum + 1} passThrough={GoToPage} label={pageNum + 2} isActive={false} />);
                _buttons.push(<button key="dots-right" className="join-item btn" disabled={true}>...</button>);
            }

            // Always establish the last page anchor
            _buttons.push(<PaginationButton key={`page-${maxPages - 1}`} page={maxPages - 1} passThrough={GoToPage} label={maxPages} isActive={pageNum === maxPages - 1} />);
        }

        setPageButtons(_buttons);
    }

    useEffect(() => {
        GetAthletes();
    }, []);

    useEffect(() => {
        GetDisplayAthletes();
    }, [filterAthletes, pageNum, displayNum]);

    useEffect(() => {
        SetPagination();
    }, [pageNum, displayNum, maxPages]);

    function FirstPage() {
        setPageNum(0);
    }

    function LastPage() {
        setPageNum(maxPages - 1);
    }

    function NextPage() {
        setPageNum(prev => (prev < maxPages - 1 ? prev + 1 : prev));
    }

    function PreviousPage() {
        setPageNum(prev => (prev > 0 ? prev - 1 : 0));
    }

    function GoToPage(page) {
        setPageNum(page);
    }

    return (
        <div className="h-fit w-full pb-15">
            {displayAthletes.map((_i, index) => (
                <div key={_i.id || index} className="w-full h-10 items-center flex gap-5 hover:cursor-pointer hover:bg-gray-100 p-3" onClick={() => triggerParentAction(1)}>
                    <p className="float-left">{_i.firstName}, {_i.lastName}</p>
                    <p className="float-left">{_i.gender}</p>
                    <p className="float-left">{_i.club}</p>
                    <p className="float-left">{_i.division}</p>
                </div>
            ))}

            <div className="join float-right [&_button]:border [&_button]:border-gray-300">
                <button className="join-item btn rounded-l-lg hover:bg-gray-200" onClick={FirstPage}>«</button>
                <button className="join-item btn hover:bg-gray-200" onClick={PreviousPage}>{"<"}</button>
                {pageButtons}
                <button className="join-item btn hover:bg-gray-200" onClick={NextPage}>{">"}</button>
                <button className="join-item btn rounded-r-lg hover:bg-gray-200" onClick={LastPage}>»</button>
            </div>
        </div>
    );
};

export default EventAthleteSection;