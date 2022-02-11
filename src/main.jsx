

import { useEffect } from 'react'

import Thumbnail from './components/thumbnail';
import {getMovList} from './api'

const movArray = [
    {
        id: 1,
        title: 'Mov 1',
        rating: '3.5'
    },
    {
        id: 2,
        title: 'Mov 2',
        rating: '5.5'
    },
    {
        id: 3, 
        title: 'Mov 3',
        rating: '7.5'
    },
    {
        id: 4,
        title: 'Mov 4',
        rating: '4.5'
    }
]



const Main = () => {
    const onThumbnailClick = (e, data) =>{
        console.log('clicked.', data, e);
        // api call to server with id
    }

    useEffect(()=>{
        // just after app get mounted.
        // api call - 
    },[])
    

    return (
        <ol>
        {
            movArray.map(item=>{
                return (
                    <Thumbnail {...item} onClick={onThumbnailClick}/>
                )
            })
        }
        </ol>
    )
}

export default Main;
