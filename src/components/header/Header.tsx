import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {loginOutAuthUser} from "../../redux/auth-reducer";

const Header = (props: any) => {
    debugger
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt={""}/>
        <div className={s.loginBlock}>

            {props.isAuth ? <div>{props.login}<button onClick={props.loginOutAuthUser}>Log out</button></div> : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;


