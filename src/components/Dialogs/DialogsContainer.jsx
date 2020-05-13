import React from "react";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()


    const addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator())
    };

    const onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    };

    return (
        <div>
            <Dialogs
                addNewMessage={addNewMessage}
                onMessageChange={onMessageChange}
                newMessageText={state.dialogsPage.newMessageText}
                dialog={state.dialogsPage.dialog}
                messages={state.dialogsPage.messages}
            />
        </div>
    )
};

export default DialogsContainer;