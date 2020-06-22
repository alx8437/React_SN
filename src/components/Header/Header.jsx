import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.login}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
            </div>
            <img src="https://i.pinimg.com/originals/72/52/3d/72523df85c330062933916e603680cde.png"></img>
        </header>
    )
}

export default Header;