import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
    const headings = [
        {
            path: "/",
            label: "Home"
        },{
            path: "/events",
            label: "Event"
        },{
            path: "/results",
            label: "Results"
        },{
            path: "/contact",
            label: "Contact Us"
        },
    ]

    return (
        <nav id="navbar-container" className="z-10 fixed top-1.5 backdrop-blur-md drop-shadow-sm text-white">
            <div className="float-left"></div>
            <div className="float-right w-1/3 h-full flex">
                {headings.map((_i) => (
                    <div className="h-full float-left grow items-center flex">
                        <NavLink
                            to={_i.path}
                            style={({isActive}) => ({
                                color: isActive ? "var(--color-mango)" : "white"
                            })}
                        >
                            {_i.label}
                        </NavLink>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;