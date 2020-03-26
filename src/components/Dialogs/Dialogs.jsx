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

    let messagesData = [
        {id: 0, message: 'Hello!'},
        {id: 1, message: 'Haw are you?'},
        {id: 2, message: 'I am fine, thanks!'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'I am from Moscow in Russian'},
        {id: 5, message: 'Nice to meet you!'}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>

        </div>
    )
};

export default Dialogs;