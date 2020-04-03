import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.message.map(m => <Message message={m.message}/>)

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