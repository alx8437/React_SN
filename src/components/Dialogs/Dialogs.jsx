import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='July' id ='1'/>
                <DialogItem name='Nataly' id='2'/>
                <DialogItem name='Robert' id='3' />
                <DialogItem name="John"   id='4' />
                <DialogItem name='Thomas' id='5' />
                <DialogItem name='Nadin' id="6" />
            </div>
            <div className={classes.messages}>
                <Message message='Hello!' />
                <Message message='How are you?' />
                <Message message='I am fine, thanks' />
                <Message message='Where are you from?' />
                <Message message='I am from Moscow in Russian' />
                <Message message='Nice to meet you!' />

            </div>

        </div>
    )
};

export default Dialogs;