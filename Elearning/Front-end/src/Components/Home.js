// import React, { Component } from 'react'
// import '../App.css';
import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu';
import Slider from './Slider';
import Courses from './Courses';
import OneCourse from './OneCourse'
import Rate from './Rate';
import Benefit from './Benefit';
import Feeling from './Feeling';
import CourseFree from './CourseFree';
import Teacher from './Teacher';
import Footer from './Footer';
import DetailsCourse from './DetailsCourse';
// import {Route, Switch} from 'react-router-dom'
import { from } from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contentSearch: '',
        }
    }
    getContent = (data) => {
        this.setState({
            contentSearch: data,
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Menu  getContent = {(data) => {this.getContent(data)}}/> 
                <Slider />
                <Courses getData = {`${this.state.contentSearch}`}/>
                <Rate />
                <Benefit />
                <Feeling />
                <CourseFree />
                <Teacher />
                <Footer />
            </div>
        )
    }
}

