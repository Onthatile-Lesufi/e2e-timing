const PaginationButton = ({page, isActive, passThrough, label}) => {
    return(
        <button className={`join-item btn ${isActive ? "bg-rouge text-white hover:bg-off-rouge" : "hover:bg-gray-200"}`} onClick={() => passThrough(page)}>{label}</button>
    )
}

export default PaginationButton;