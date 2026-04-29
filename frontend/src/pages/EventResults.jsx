import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventResults = () => {
    const [ eventDetails, setEventDetails ] = useState(null);
    const {event} = useParams();

    useEffect (() => {

    }, [])

    return (
        <div className="w-full min-h-screen">
            
        </div>
    )
}

export default EventResults;