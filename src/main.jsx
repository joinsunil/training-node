

import { useEffect, useState } from 'react'

import Thumbnail from './components/thumbnail';
import MovieDetail from './movieDetail';

import {getMovList, getMovieDetail} from './api'


const Main = () => {

    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState(null);

    const onThumbnailClick = (e, data) =>{
        console.log('clicked.', data, e);
        // api call to server with id
        setMovieId(data.id)
    }

    useEffect(()=>{
        // just after app get mounted.
        // api call - 
        getMovList()
        .then(res=>res.json())
        .then(res=>{
            console.log('res', res)
            setMovies(res.results)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])


    return (
        <>
            {
                movieId && 
                <div>
                    <p>-- Details --</p>
                    <MovieDetail id={movieId}/>
                </div>
            }
            <div>
                {!movies.length && <>Loading...</>}
                <ol className='ol-list'>
                {
                    movies.map(item=>{
                        return (
                            <Thumbnail {...item} onClick={onThumbnailClick}/>
                        )
                    })
                }
                </ol>
            </div>
        </>

    )
}

export default Main;
