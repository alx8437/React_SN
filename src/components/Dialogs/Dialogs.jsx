import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'I am fine, thanks!'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'I am from Moscow in Russian'},
        {id: 5, message: 'Nice to meet you!'}
    ];

    let messages = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div>
                { dialogs }
            </div>
            <div>
                { messages }
            </div>

        </div>
    )
};

export default Dialogs;