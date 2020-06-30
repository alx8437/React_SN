import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { FaMale, FaEnvelope, FaNewspaper, FaMusic, FaCog, FaUsers, FaSignInAlt} from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMale color="#8DC63F" /> </div>
                    <NavLink to="/profile" className={styles.nonActive} activeClassName={styles.active}>Profile</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaEnvelope color="#662D91"/></div>
                    <NavLink to="/dialogs" className={styles.nonActive} activeClassName={styles.active}>Messages</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaNewspaper color="#EE5187"/></div>
                    <NavLink to="/news" className={styles.nonActive} activeClassName={styles.active}>News</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMusic color="#F7941E"/></div>
                    <NavLink to="/music" className={styles.nonActive} activeClassName={styles.active}>Music</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaCog color="#1C75BC"/></div>
                    <NavLink to="/settings" className={styles.nonActive} activeClassName={styles.active}>Settings</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaUsers color="#9E1F63"/></div>
                    <NavLink to="/users" className={styles.nonActive} activeClassName={styles.active}>Users</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaSignInAlt color="#a8dadc"/></div>
                    <NavLink to="/login" className={styles.nonActive} activeClassName={styles.active}>Login</NavLink>
                </div>
            </div>
        </nav>
    )
};


export default Navbar;
