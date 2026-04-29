import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StatusTypes from "../utilities/StatusTypes";

const MainEventsTable = () => {
    const [ filterName, setFilterName ] = useState("");
    const [ tablePage, setTablePage ] = useState(1);
    const [ events, setEvents ] = useState([
      {
        name: "CGA Championships 2026",
        date: "25/04/2026",
        venue: "University of Johannesburg Rugby Stadium",
        organiser: "Central Gauteng Athletics",
        path: 1,
        status: StatusTypes.UNSTARTED
      }
    ]);
    const [ displayEvents, setDisplayEvents ] = useState([]);
    const navigate = useNavigate();

    function FilterVenueOptions () {

    }

    function FirstPage () {

    }

    function LastPage () {
        
    }

    function NextPage () {

    }

    function PreviousPage () {

    }

    useEffect(() => {
        setDisplayEvents(events);
    },[])

    return (
        <div className="overflow-x-auto bg-white rounded-lg p-6 pt-4 drop-shadow-2xl">
            <div className="w-full h-30 flex items-center">
                <label className="input border rounded-lg border-gray-400 ml-5 bg-gray-50 float-left">
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
                    <input type="text" className="grow" placeholder="Search" onChange={(e) => setFilterName(e.target.value)}/>
                </label>
                <input type="date" className="input border rounded-lg border-gray-400 ml-5 bg-gray-50 float-left"/>
                <fieldset class="fieldset float-left  ml-5 w-50 -mt-7">
                    <legend class="fieldset-legend">Sort By</legend>
                    <select class="select border rounded-lg border-gray-400 bg-gray-50">
                        <option>Upcoming</option>
                        <option>Oldest First</option>
                        <option>Alphabetical Order {"(Asc)"}</option>
                        <option>Alphabetical Order {"(Desc)"}</option>
                        <option>Cancelled</option>
                        <option>Finished</option>
                        <option>Ongoing</option>
                    </select>
                </fieldset>
                <button className="btn ml-5 border rounded-lg border-rouge bg-rouge text-white float-left">Filter</button>
            </div>
            <table className="table table-zebra mb-5">
                <thead className="[&_th]:border-b [&_th]:border-gray-300 text-black">
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>Organiser</th>
                        <th>Status</th>
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
                      <td className="font-bold">{_event.status}</td>
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
            <button className="join-item btn rounded-l-lg" onClick={FirstPage}>«</button>
            <button className="join-item btn" onClick={PreviousPage}>{"<"}</button>
            <button className="join-item btn">1</button>
            <button className="join-item btn" onClick={NextPage}>{">"}</button>
            <button className="join-item btn rounded-r-lg" onClick={LastPage}>»</button>
          </div>
        </div>
    )
}

export default MainEventsTable;