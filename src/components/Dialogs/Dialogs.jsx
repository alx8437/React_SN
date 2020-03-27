import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

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
    let dialogData = [
        {id: 1, name: 'July'},
        {id: 2, name: 'Robert'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Thomas'},
        {id: 5, name: 'Nadin'},
        {id: 6, name: 'Raichel'}
    ];

    let dialogs = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesData = [
        {id: 0, message: 'Hello!'},
        {id: 1, message: 'Haw are you?'},
        {id: 2, message: 'I am fine, thanks!'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'I am from Moscow in Russian'},
        {id: 5, message: 'Nice to meet you!'}
    ];

    let messages = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogs }
            </div>
            <div className={classes.messages}>
                { messages }
            </div>

        </div>
    )
};

export default Dialogs;