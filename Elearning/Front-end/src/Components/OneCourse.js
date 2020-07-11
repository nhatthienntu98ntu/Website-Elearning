import React, { Component, useState, useEffect } from 'react'
import './../App.css';
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import DetailsCourse from './DetailsCourse';
import { GET_COURSE } from './data.app/course'
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const ListCourse = withRouter(props => {
    const { loading, error, data } = useQuery(GET_COURSE)
    const [courses, setCourses] = useState([]);
    const { search } = props;

    const changeRoute = course => () => {
        props.history.push({
            pathname: '/details',
            state: { course }
        })
    }

    useEffect(() => {
        if (search === "" && data && data.courses) {
            setCourses(data.courses);
        }
    });


    useEffect(() => {
        let origiData = ( data && data.courses) || []
        let ss = [...origiData].filter(e => new RegExp(search, 'giu').test(e.name))
        setCourses(ss);
    }, [search]);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (courses.length === 0)? <h6 className ='not_find'>Khoá học chưa được cập nhật</h6>: courses.map(course => (
            <div className="col-4 " key={course._id}>
                <div className="_1course">
                    <div onClick={changeRoute(course)}>
                        <div className='imagess'>
                            <img src={`images/${course.image}`} alt="" className="img-fluid" />
                            <div className="sale">SALE</div>
                        </div>
                        <div className="heading">{course.name}</div>
                    </div>
                    <div className="description">{course.description}</div>
                    <div className="author">
                        <img src={`images/${course.teacher.image}`} alt="" className="img_author" />
                        <div className="name_autho">{course.teacher.name}</div>
    
                        <div className="line" />
                    </div>
                    <div className="start">
                        <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <div className="evaluate"> ( 10 đánh giá )</div>
                        </ul>
                        <div className="user float-right"><i className="fa fa-users" /> 234 Học viên</div>
                    </div>
                    <div onClick={changeRoute(course)}>
                        <div className="buy float-left"> <span>Đăng ký</span></div>
                    </div>
                    <div className="price float-right">${course.newPrice}</div>
                    <div className="old_price float-right">${course.oldPrice}</div>
                </div>
            </div>
        )
        )
    
    
})

export default class OneCourse extends Component {
    render() {
        return (
            <ListCourse search={this.props.getDataSearch} />
        )
    }
}


