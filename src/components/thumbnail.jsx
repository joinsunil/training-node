
// const style = {
//     padding: "10px",
//     background: "#ccc",
//     margin: "5px",
//     display:"inline-block"
// }

/**
 * 
 * @param {adult: false
backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
genre_ids: (3) [28, 12, 878]
id: 634649
original_language: "en"
original_title: "Spider-Man: No Way Home"
overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
popularity: 7539.194
poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
release_date: "2021-12-15"
title: "Spider-Man: No Way Home"
video: false
vote_average: 8.4
vote_count: 7912} props 
 * @returns 
 */
const Thumbnail = (props) =>{
    const {title, rating, id, onClick} = props;
    return (
        <li className="thumbnail">
            <div className="img-box">
                <p><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.backdrop_path}`}/></p>
            </div>
            <div>
                <p style={{cursor:'pointer'}} onClick={(e)=>onClick(e, {title, rating, id})}>{props.title}</p>
                <p>{props.vote_average} ({props.vote_count})</p>
                <p><strong>Overview </strong> - {props.overview}</p>
            </div>
        </li>
    )
}

export default Thumbnail;
