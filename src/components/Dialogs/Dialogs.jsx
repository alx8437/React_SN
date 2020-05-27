import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    const addNewMessage = () => {
        props.addNewMessage()
    };

    const onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.onMessageChange(text)
    };

    return (
        <div className={classes.dialogs}>
            <div>
                { dialogs }
            </div>
            <div>
                { messages }
            </div>
            <div className={classes.textarea}>
                <textarea
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}
                    placeholder="enter your message"
                />
            </div>
            <div>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    )
};

export default Dialogs;