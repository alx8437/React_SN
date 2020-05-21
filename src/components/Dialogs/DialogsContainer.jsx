import React from "react";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

    let mapStateToProps = (state) => {
        return {
            newMessageText: state.newMessageText,
            dialog: state.dialogsPage.dialog,
            messages: state.dialogsPage.messages
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            addNewMessage: () => {
                dispatch(addNewMessageActionCreator())
            },
            onMessageChange: (text) => {
                dispatch(onMessageChangeActionCreator(text))
            },
        }

    }

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer;