import { useContext, useEffect, useState } from "react";
import { GetEventResults } from "../services/EventServices";
import { ActionContext } from "../pages/Event";

const EventResultSection = () => {
    const [ results, setResults ] = useState([]);
    const [ resultVisual, setResultsVisual ] = useState([]);
    const triggerParentAction = useContext(ActionContext);

    async function GetResults() {
        let _results = await GetEventResults();
        console.log(_results);
        setResults(_results);
    }

    function UpdateResultVisual () {
        let _visual = [];
        results.forEach(result => {
            _visual.push(<h3 className="font-bold text-2xl mb-2">{result.name}</h3>)
            _visual.push(<hr className="mb-5"/>)
            let _results = [];
            result.results.forEach(result => {
                _results.push(<p onClick={() => triggerParentAction(1)}>{result.firstName}, {result.lastName} - {result.performance}</p>);
            });
            _visual.push(<div className="mb-5">{_results}</div>)
        });
        setResultsVisual(_visual);
    }

    useEffect(() => {
        GetResults();
    },[]);

    useEffect(() => {
        UpdateResultVisual();
    }, [results]);

    return (
        <div className="w-full min-h-screen"> 
            {resultVisual.length >= 0?
                resultVisual
            :
                <div className="w-fit h-30 grid justify-center items-center text-center">
                    <span className="loading loading-bars loading-xl text-off-rouge w-20 h-fit"></span>
                    <p className="h-fit">Loading</p>
                </div> 
            }
        </div>
    )
}

export default EventResultSection;