import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import {connect} from "react-redux";
import { compose } from 'redux';
import withRouter from "./components/hoc/withRouter";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {

    componentDidMount() {
        // @ts-ignore
        this.props.initializeApp()
    }
    render() {

        //@ts-ignore
        if(!this.props.initialized){
            return <Navigate to ="/login"/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/profile/*'
                               element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>

                </div>
            </div>
        )
    }
}

export const mapStateToProps =(state:any)=>{
    return {
        initialized:state.app.initialized
    }
}

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);