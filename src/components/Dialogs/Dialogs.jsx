import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreater, onMessageChangeActionCreater} from "../../redux/state";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    // let textPost = React.createRef();

    const addNewMessage = () => {
        // props.dispatch(addNewMessageActionCreater())
        props.dispatch({type: "ADD_NEW_MESSAGE"})
    };

    const onMessageChange = (e) => {
        let text = e.currentTarget.value;
        // props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT",newTextMessage: text})
        props.dispatch(onMessageChangeActionCreater(text))
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
                />
            </div>
            <div>
                <button onClick={addNewMessage}>add message</button>
            </div>
        </div>
    )
};

export default Dialogs;