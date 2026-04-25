import LandingBanner from "../assets/banners/sky-2.jpg";
import MainEventsTable from "../components/MainEventsTable";

const Events = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="absolute w-full h-125">
                <img className="w-full h-full object-cover object-bottom absolute" src={LandingBanner}/>
                <div className=" relative bg-[#00000030] w-full h-full"></div>
            </div>
            <div className="relative w-full pt-50 pl-30 pr-30">
                <h2 className="uppercase font-main text-white text-8xl italic font-bold ml-30 mb-10">Events</h2>
                <MainEventsTable/>
            </div>
        </div>
    )
}

export default Events;