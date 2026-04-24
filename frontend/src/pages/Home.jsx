import { Link } from "react-router-dom";
import HeroImage from "../assets/DSC_0036-1.jpg";
import HeroStatTracker from "../components/HeroStatTracker";
import VerticalRule from "../components/VerticalRule";
import LinkButton from "../components/LinkButton";
import PeopleBadge from "../assets/People.svg";
import StopWatchBadge from "../assets/Stopwatch.svg";
import CloudHeader from "../assets/sky.jpg"
import EventsTables from "../components/EventsTables";

const Home = () => {
    return (
        <div className="w-full h-fit z-0">
            <div className="h-screen">
                <div className="w-full h-[75vh] flex items-center">
                    <div className="w-full h-[75vh] absolute">
                        <img className="w-full h-full object-cover object-[0%_-25vh] absolute" src={HeroImage}/>
                        <div className=" relative bg-[#00000020] w-full h-full"></div>
                    </div>
                    <div className="relative ml-[10vw] text-white">
                        <h1 className="uppercase font-black text-5xl italic font-main">
                            End-2-End <br/> Event Timing
                        </h1>
                        <h2 className="text-2xl font-semibold mt-3 italic font-main">
                            Professional Time, Results & Ticketing
                        </h2>
                        <div className="uppercase flex items-center gap-5 mt-7">
                            <LinkButton label={"View Upcoming Events"} colour={'var(--color-mango)'} path={"/events"}/>
                            <LinkButton label={"See Results"} colour={'#1f1f1f'} path={"/results"}/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[25vh] pl-15 pr-15 flex items-center">
                    <HeroStatTracker statNumber={100} statCriteria={"Events Timed"} displayIcon={StopWatchBadge}/>
                    <VerticalRule length={75}/>
                    <HeroStatTracker statNumber={"10,000"} statCriteria={"Athletes Scored"} displayIcon={PeopleBadge}/>
                    <VerticalRule length={75}/>
                    <HeroStatTracker statNumber={"200,000"}  statCriteria={"Scores Published"}/>
                    <VerticalRule length={75}/>
                    <HeroStatTracker statNumber={"60"} statCriteria={"Championships \n Managed"}/>
                    <VerticalRule length={75}/>
                    <HeroStatTracker/>
                </div>
            </div>
            <div className="min-h-screen w-full">
                <div className="w-full h-115 absolute">
                    <img className="w-full h-full object-cover" src={CloudHeader}/>
                </div>
                <div className="relative w-full h-full p-22 pl-35 pb-0">
                    <h2 className="uppercase text-5xl font-main font-bold text-white">Upcoming Events</h2>
                </div>
                <div className="pl-25 pr-25 mt-10">
                    <EventsTables/>
                </div>
            </div>
        </div>
    )
}

export default Home;