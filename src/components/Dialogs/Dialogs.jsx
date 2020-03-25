import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Juli</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Nataly</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Robert</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>John</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Thomas</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Nadin</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello!</div>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
            </div>

        </div>
    )
};

export default Dialogs;