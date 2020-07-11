import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Search from './Search';

export default class Menu extends Component {
    getContentSearch = (data) => {
        // this.props.getContent = data
        // console.log(data);
        this.props.getContent(data);
    }   
    render() {
        
        return (
                <div className="menu wow bounceInRight" data-wow-duration="1s">
                    <div className="container">
                        <div className="logo">
                            <img src="images/logo.png" alt="" className="img-fluid" />
                            <p>Learn for work</p>
                        </div>
                        <div className="menu-left">
                            <ul>
                                <li><Link to ="/home" data-text="Home" className="home">Home</Link></li>
                                {/* <li><a href =" "data-text="Home" className="home">Home</a></li> */}
                                <li><a href =" "data-text="About" className="about">About</a></li>
                                <li><a href =" "data-text="Course" className="course">Course</a></li>
                                <li><a href =" "data-text="Teacher" className="Teacher">Teacher</a></li>
                                <li><a href =" "data-text="Contact" className="end">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='btn-timkiem float-right'> <Search getContentSearch = {(data) => this.getContentSearch(data)}/></div>
                   
                </div>
        // Khi di chuyển chuột vào các mục của thanh menu thì tạo hiệu ứng cho các mục đó, sử dụng data-text của
        //HTML5 để lấy dữ liệu. 
        // Lợi ích của HTML5 là khả năng tương thích với nhiều trình duyệt phổ biến, bao gồm Firefox, Internet Explorer, Chrome, Safari và Opera. Điều này có nghĩa là tất cả trình duyệt đều phải hỗ trợ các phần tử mới trong HTML5.
        //

        )
    }
}
