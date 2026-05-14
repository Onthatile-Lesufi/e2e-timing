import BannerImg from "../assets/banners/sky-1.jpg";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    function SendMessage() {
        navigate("/");
    }

    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-100 absolute">
                <img className="w-full h-full object-cover" src={BannerImg}/>
            </div>
            <div className="relative w-full">
                <div className="w-full h-85 pt-30 flex items-center pl-60">
                    <h2 className="uppercase font-main text-white text-8xl italic font-bold"> 
                        Contact Us
                    </h2>
                </div>
                <div className="pr-35 pl-35 mb-15">
                    <div className="p-15 p min-h-fit w-full grid gap-3 items-center bg-gray-50 drop-shadow-sm">
                        <p className="font-main font-bold text-3xl">Your Details</p>
                        <p className="font-main">Please enter your details here, all fields are compulsory.</p>
                        <div>
                            <legend class="fieldset-legend">First Name</legend>
                            <input type="text" className="p-2 pl-3 w-full h-10 border rounded-md bg-gray-100"/> 
                        </div>
                        <div>
                            <legend class="fieldset-legend">Last Name</legend>
                            <input type="text" className="p-2 pl-3 w-full h-10 border rounded-md bg-gray-100"/>
                        </div>
                        <div>
                            <legend class="fieldset-legend">Email</legend>
                            <input type="email" className="p-2 pl-3 w-full h-10 border rounded-md bg-gray-100"/>
                        </div>
                        <div>
                            <legend class="fieldset-legend">Message</legend>
                            <textarea type="text" className=" p-3 w-full h-50 border rounded-md align-text-top bg-gray-100"/>
                        </div>
                        <button type="button" className="btn w-25 bg-rouge border-0 text-white rounded-md" onClick={SendMessage}>Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;