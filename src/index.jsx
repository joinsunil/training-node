
import * as React from 'react'
import ReactDom from 'react-dom';

import Main from './main'

// const app = () => {
//     return (
//         <div>
//             react app
//         </div>
//     )
// }

function main() {
    ReactDom.render(<Main/>, document.getElementById('app'))
}

main();