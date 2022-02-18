
const API_KEY = 'f67c6a87d3fb18353bdda796836d40f0';
const BASE_URL = 'https://api.themoviedb.org/3'
export const getMovList = ()=>{
    // fetch('')
    // return Promise.resolve([
    //     {
    //         id: 1,
    //         title: 'Mov 1',
    //         rating: '3.5'
    //     },
    //     {
    //         id: 2,
    //         title: 'Mov 2',
    //         rating: '5.5'
    //     },
    //     {
    //         id: 3, 
    //         title: 'Mov 3',
    //         rating: '7.5'
    //     },
    //     {
    //         id: 4,
    //         title: 'Mov 4',
    //         rating: '4.5'
    //     }
    // ])

    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
}


export const getMovieDetail = (id) =>{
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
}