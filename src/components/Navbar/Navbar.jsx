import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import MyContext from "../../MyContext";
import store from "../../redux/store-redux";

const Navbar = (props) => {

    return <MyContext.Consumer>
        {store => {
            return (
                <nav className={classes.nav}>
                    <div className={classes.item}>
                        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                    </div>
                    <div>
                        <Sidebar store={store}/>
                    </div>

                </nav>
            )
        }
        }
    </MyContext.Consumer>
};

export default Navbar;
