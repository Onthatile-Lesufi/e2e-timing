const VerticalRule = ({length}) => {
    return (
        <div 
            style={{
                // '--dynamic-margin': `${(100 - length)/2}%`,
                height: `${length}%`
            }} 
            className={`w-1 bg-[#1f1f1f] mx-auto`}
        >
        </div>
    )
}

export default VerticalRule;