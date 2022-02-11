
export const getMovList = ()=>{
    // fetch('')
    return Promise.resolve([
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
    ])
}