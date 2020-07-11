import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CODEFREE } from './data.app/codeFree'

function ListCodeFree() {
    const { loading, error, data } = useQuery(GET_CODEFREE)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return data.codeFrees.map(codeFree => (
        <div className="col-6 mt-3" key={codeFree._id}>
            <img src={`images/${codeFree.image}`} alt="" className="img-fluid float-left free" />
            <a href="#top" className="link">{codeFree.name}
            </a>
            <div className="time">
                <i className="fa fa-clock-o fa-fw" /> {codeFree.date}
            </div>
            <p className="description">{codeFree.description}</p>
        </div>
    ))
}

export default class OneCourseFree extends Component {
    render() {
        return (
                <ListCodeFree  />
        )
    }
}


// export default class OneCourseFree extends Component {
//     render() {
//         return (
//             <div className="col-6 mt-3">
//                 <img src="images/free.png" alt="" className="img-fluid float-left free" />
//                 <a href="#" className="link">The Biggest Sharks in the Humanity Nightmares Below the Waves
//     </a>
//                 <div className="time">
//                     <i className="fa fa-clock-o fa-fw" /> 21/11/2019
//     </div>
//                 <p className="description">Owlcation » Prow » Nautical Biota The Biggest Sharks in…</p>
//             </div>
//         )
//     }
// }