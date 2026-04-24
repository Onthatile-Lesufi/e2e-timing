const HeroStatTracker = ({displayIcon, statNumber, statCriteria}) => {
    return (
        <div className="w-full h-full flex items-center justify-center pl-7 pr-7 gap-7">
            <div className="">
                <img className="" src={displayIcon}/>
            </div>
            <div className=" justify-center items-center font-main">
                <h2 className="text-4xl font-bold">
                    {statNumber ? statNumber : 0}+
                </h2>
                <h3 className="text-[1.25rem] uppercase font-medium">
                    {statCriteria? statCriteria : "Insert Criteria"}
                </h3>
            </div>
        </div>
    )
}

export default HeroStatTracker;