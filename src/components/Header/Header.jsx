import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"



const Header = (props) => {
    debugger
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <img src={logo}></img>
                <div className={styles.login}>

                    {props.isAuth ? props.login : <div><NavLink to={"/login"}>login</NavLink></div>}
                </div>
            </div>
        </header>
    )
}

export default Header;