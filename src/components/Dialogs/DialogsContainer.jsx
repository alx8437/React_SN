import React from "react";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import MyContext from "../../MyContext";

const DialogsContainer = () => {

    return ( <MyContext.Consumer>
        {store => {

            let state = store.getState();

            const addNewMessage = () => {
                store.dispatch(addNewMessageActionCreator())
            };

            const onMessageChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text))
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
        }
        }
    </MyContext.Consumer> )

};

export default DialogsContainer;