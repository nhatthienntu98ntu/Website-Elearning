// import React, { Component } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import { GET_USER } from './data.app/user'
// import WrongPassUser from './WrongPassUser'
// import Img from '../warning.jpg'



import React, { Component, useState } from 'react'
import Img from '../warning.jpg'
import { useQuery } from '@apollo/react-hooks'
import WrongPassUser from './WrongPassUser'
import { GET_USER } from './data.app/user'
import UserList from './user/list.user'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import UserCourseList from './userCourse/list.userCourse'

// function LogIn(){
//     const { loading, error, data } = useQuery(GET_USER)
//     const [ status, setStatus ] = useState(true)
//     console.log(data)

//     const showAdmin = () => {

//         // data.users.forEach( user =)
//         if (this.refs.username.value === 'trieuthuan' && this.refs.password.value == 123) {
//             alert('abcc');
//         } 
//         else {
//             setStatus(false)
//         }
//     }
//     console.log(status)
//     return (
//         <div className= "fullScreen">
//         <div className="loginbox">
//             {status
//                 ? <div>
//                     <h1>Login Here</h1>
//                     <form>
//                         <p>Username</p>
//                         <input type="text" placeholder="Enter Username" ref="username" />
//                         <p>Password</p>
//                         <input type="password" placeholder="Enter Password" ref="password" />
//                         <input type="submit" defaultValue="Login" onClick={() => showAdmin()} />
//                         <a href=" ">Lost your password ?</a><br />
//                         <a href=" ">Don't have an account ?</a>
//                 </form> </div>
//                 : <WrongPassUser/> }
//         </div>
//         </div>
//     )
// }

// export default class Form extends Component{
//     render() {
//         return(
//             <div>
//                 <LogIn />
//             </div>
//         )
//     }
// }

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            status : true,
            redirect: false,
        }
    }
    showAdmin = () => {
        if (this.refs.username.value === 'trieuthuan'&& this.refs.password.value === 'trieuthuan' || this.refs.username.value == 'nhatthien' && this.refs.password.value == 'nhatthien') {
            this.setState({
                redirect: true
            })
        } else {
            this.setState({
                status:false,
            })
        }
    }
    render() {
        if(this.state.redirect){
            return <Redirect to='/admin' />
        }
        return (
            <div className= "fullScreen">
            <div className="loginbox">
                {this.state.status 
                    ? <div>
                        <h1>Login Here</h1>
                        <form>
                            <p>Username</p>
                            <input type="text" placeholder="Enter Username" ref="username" />
                            <p>Password</p>
                            <input type="password" placeholder="Enter Password" ref="password" />
                            <input type="submit" defaultValue="Login" onClick={() => this.showAdmin()} />
                            <a href=" ">Lost your password ?</a><br />
                            <a href=" ">Don't have an account ?</a>
                    </form> </div>
                    : <WrongPassUser/> }
            </div>
            </div>
        )
    }
}
