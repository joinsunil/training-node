import { useEffect, useState } from 'react'

import {getMovieDetail} from './api'

const movieDetail = (props) =>{

    const [detail, setDetail] = useState(null)

    useEffect(()=>{
        // just after app get mounted.
        // api call - 
        getMovieDetail(props.id)
        .then(res=>res.json())
        .then(res=>{
            console.log('res', res)
            setDetail(res)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])

    if(!detail){
        return(<div>Loading..</div>)
    }

    return(
        <div>
            <p>{detail.original_title}</p>
            <p>{detail.overview}</p>
            <p>{detail.production_countries.join(',')}</p>
            <p>{detail.release_date}</p>
            <p>{detail.status}</p>
            <p>{detail.tagline}</p>
            <p>{detail.vote_average}</p>
        </div>
    )
}

export default movieDetail;
