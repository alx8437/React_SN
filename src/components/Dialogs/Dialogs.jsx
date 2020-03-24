import React from "react";
import classes from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    Juli
                </div>
                <div className={classes.dialog}>
                    Nataly
                </div>
                <div className={classes.dialog}>
                    Robert
                </div>
                <div className={classes.dialog}>
                    John
                </div>
                <div className={classes.dialog}>
                    Thomas
                </div>
                <div className={classes.dialog}>
                    Nadin
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