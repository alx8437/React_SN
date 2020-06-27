import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"



const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <img src={logo}></img>
                <div className={styles.login}>
                    {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;