import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let textPost = React.createRef();

    const addNewMessage = () => {
        let message = textPost.current.value;
        // props.addNewMessage(message);
        props.dispatch({type: "ADD-NEW-MESSAGE", newMessagePost: message })
    };

    const onMessageChange = () => {
        let text = textPost.current.value;
        // props.updateNewMessageText(text);
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newTextMessage: text})
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
                    ref={textPost}
                    value={props.dialogsPage.newMessageText}
                />
            </div>
            <div>
                <button onClick={addNewMessage}>add message</button>
            </div>
        </div>
    )
};

export default Dialogs;