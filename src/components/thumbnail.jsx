
// const style = {
//     padding: "10px",
//     background: "#ccc",
//     margin: "5px",
//     display:"inline-block"
// }

const Thumbnail = (props) =>{
    const {title, rating, id, onClick} = props;
    return (
        <li onMouseEnter={(e)=>onClick(e, {title, rating, id})} className="thumbnail">
            <span>{title}</span>
            <span>{rating}</span>
        </li>
    )
}

export default Thumbnail;
