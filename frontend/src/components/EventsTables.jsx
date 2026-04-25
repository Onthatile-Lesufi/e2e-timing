import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EventsTables = () => {
    const [ filterName, setFilterName ] = useState("");
    const [ events, setEvents ] = useState([
      {
        name: "CGA Championships 2026",
        date: "25/04/2026",
        venue: "University of Johannesburg Rugby Stadium",
        organiser: "Central Gauteng Athletics",
        path: 1
      }
    ]);
    const [ displayEvents, setDisplayEvents ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      setDisplayEvents(events);
    },[])

    function SetEventsByName () {
        // const _safeValues = events.map(_event => _event.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const _safeInput = filterName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        const _patternString = _safeInput;
        const _pattern = new RegExp(_patternString, 'i');

        let _results = events.filter(_event => _pattern.test(_event.name));
        setDisplayEvents(_results);
    }

    return (
        <div className="overflow-x-auto bg-white rounded-lg p-6 pt-4 drop-shadow-2xl">
          <div className="w-full h-15 items-center flex">
            <label className="input border rounded-lg border-gray-400 ml-5 bg-gray-50">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" onChange={(e) => setFilterName(e.target.value)}/>
            </label>

            <button className="btn" onClick={SetEventsByName}>Filter</button>
          </div>
          <table className="table table-zebra mb-5">
            <thead className="[&_th]:border-b [&_th]:border-gray-300 text-black">
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Organiser</th>
              </tr>
            </thead>
            {/* One single line controls the borders for EVERY cell in the body! */}
            {/* <tbody className="[&_th]:border-b [&_th]:border-gray-300 [&_td]:border-b [&_td]:border-gray-300 [&_tr]:hover:bg-gray-100 [&_tr]:hover:cursor-pointer"> */}
            <tbody className="[&_tr]:hover:bg-gray-100 [&_tr]:hover:cursor-pointer">
              {displayEvents.map((_event) => (
                <tr onClick={() => navigate(`/events/${_event.path}`)} >
                  <th>{_event.name}</th>
                  <td>{_event.date}</td>
                  <td>{_event.venue}</td>
                  <td>{_event.organiser}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {displayEvents.length <= 0 ? 
              <div className="h-35 w-full flex justify-center items-center">
                <h3>No Events</h3>
              </div>
              :
              <></>
          }
          <div className="join float-right [&_button]:border [&_button]:border-gray-300 [&_button]:hover:bg-gray-200">
            <button className="join-item btn rounded-l-lg">«</button>
            <button className="join-item btn">{"<"}</button>
            <button className="join-item btn">{"1"}</button>
            <button className="join-item btn">{">"}</button>
            <button className="join-item btn rounded-r-lg">»</button>
          </div>
        </div>
    )
} 

export default EventsTables;