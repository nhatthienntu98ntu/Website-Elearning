import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import {GET_TEACHER} from './data.app/teacher'

function ListTeacher(){
    const { loading, error, data} = useQuery(GET_TEACHER)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;   

    return data.teachers.map( teacher => (
        <div className="col-3" key={teacher._id}>
            <div className= 'imagess'>
                <img src={`images/${teacher.image}`} alt="" className="teacher img-fluid" />
                <div className="heart"><i className="fa fa-heart-o"></i></div>
            </div>
            <div className="nameteacher">{teacher.name}</div>
            <div className="position">{teacher.position}</div>
        </div>
    ))
}

export default class OneTeacher extends Component {
    render() {
        return (
                <ListTeacher  />
        )
    }
}

// export default class OneTeacher extends Component {
//     render() {
//         return (
//             <div className="col-3">
//                 <img src="images/teacher1.jpg" alt="" className="teacher img-fluid" />
//                 <div className="nameteacher">Jeremy Lawson</div>
//                 <div className="position">Từng lập trình tại Amazon</div>
//             </div>
//         )
//     }
// }
