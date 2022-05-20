import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    // @ts-ignore
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.item}`)} to="/profile" >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.item}`)} to="/dialogs">Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.item}`)} to={"/users"}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;