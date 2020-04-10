import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.state.messages.map(m => <Message message={m.message}/>);

    let textPost = React.createRef();

    const text = () => {
      alert(textPost.current.value)
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
                <textarea ref={textPost}></textarea>
            </div>
            <div>
                <button onClick={text}>add post</button>
            </div>
        </div>
    )
};

export default Dialogs;