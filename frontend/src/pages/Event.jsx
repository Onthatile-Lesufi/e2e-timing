import { useEffect, useState } from "react";
import BannerImg from "../assets/banners/sky-1.jpg";
import StatusTypes from "../utilities/StatusTypes";

const Event = () => {
    const [ eventDetails, setEventDetails ] = useState(null);
    let disableCheck = !eventDetails || (eventDetails.status == StatusTypes.CANCELLED || eventDetails.status == StatusTypes.FINISHED);

    useEffect(() => {
        
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
                    
                    <button disabled={disableCheck} className="btn float-left ml-10 font-main border-0 rounded-lg bg-rouge text-white disabled:bg-red-200">
                        Buy Tickets
                    </button>  
                </div>
                <div>
                    {/*  */}
                </div>
            </div>
        </div>
    )
} 

export default Event;