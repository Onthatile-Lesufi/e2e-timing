import { Link } from "react-router-dom";

const LinkButton = ({label, path, colour}) => {
    return(
        <Link
            to={path}
        >
            <div 
                className={`w-fit rounded-[3px] p-3 pl-8 pr-8`}
                style={{
                    backgroundColor: colour ? colour : "black"
                }}
            >
                <p className="uppercase font-regular font-main ">
                    {label}
                </p>
            </div>
        </Link>
    )
}

export default LinkButton;