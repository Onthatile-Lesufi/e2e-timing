import { useEffect, useState } from "react";
import BannerImg from "../assets/banners/sky-1.jpg";
import StatusTypes from "../utilities/StatusTypes";
import EventTimetableSection from "../sub-sections/EventTimetableSection";
import EventAthleteSection from "../sub-sections/EventAthleteSection";
import EventResultSection from "../sub-sections/EventResultSection";
import EventTicketSection from "../sub-sections/EventTicketSection";

const Event = () => {
    const [ eventDetails, setEventDetails ] = useState(null);
    const [ tabList, setTabList ] = useState([]);
    const [ tabContents, setTabContents ] = useState(<></>);
    const tabs = [
        {
            label: "Timetable",
            content: <EventTimetableSection/>
        },
        {
            label: "Athletes",
            content: <EventAthleteSection/>
        },
        {
            label: "Results",
            content: <EventResultSection/>
        },
        {
            label: "Tickets",
            content: <EventTicketSection/>
        },
    ];

    let disableCheck = !eventDetails || (eventDetails.status === StatusTypes.CANCELLED || eventDetails.status === StatusTypes.FINISHED);
    let tabIndex = 0;

    function UpdateTabContents (incoming) {
        let _result = tabs.find(tab => tab.label === incoming);
        
        if (_result === null) return;
        console.log(`Event UpdateTabContents | _results [${_result.label}]`);
        setTabContents(_result.content);
    }

    function UpdateTabList () {
        let _result = [];
        tabs.forEach((tab) => (
            _result.push(
                <div className="w-full h-full hover:bg-off-rouge hover:cursor-pointer text-white font-bold text-2xl font-main" onClick={() => UpdateTabContents(tab.label)}>
                    <p className="w-full h-full flex items-center justify-center" >{tab.label}</p>
                </div>
            )
        ));
        setTabList(_result);
    }

    useEffect(() => {
        UpdateTabList();
        UpdateTabContents("Timetable");
    },[])

    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-125 absolute">
                <img className="w-full h-full object-cover" src={BannerImg}/>
            </div>
            <div className="relative w-full pt-50 pl-30 pr-30">
                <div className="w-full h-50 flex items-center pl-30 mb-10">
                    <div className="float-left">
                        <h2 className="uppercase font-main text-white text-8xl italic font-bold">
                            {eventDetails?
                            eventDetails.name
                            :
                            "Event Name"
                            }
                        </h2>
                        <h3 className="uppercase font-main text-white text-4xl italic font-bold">
                            {eventDetails?
                            `${eventDetails.date} - ${eventDetails.venue}`
                            :
                            "Date - Venue"
                            }
                        </h3>
                    </div>
                    
                    {/* TODO: Add remove if tab does not work */}
                    {/* <button disabled={disableCheck} className="btn float-left ml-10 font-main border-0 rounded-lg bg-rouge text-white disabled:bg-red-200">
                        Buy Tickets
                    </button>   */}
                </div>
            </div>
            <div className="relative w-full h-screen">
                <div className=" w-full justify-center items-center flex h-25 bg-rouge">
                    {tabList}
                </div>

                <div class=" border-base-300 bg-base-100 rounded-box p-6">
                    <div class="tab-pane">{tabContents}</div>
                </div>
            </div>
        </div>
    )
} 

export default Event;