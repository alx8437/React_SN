import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

    let mapStateToProps = (state) => {
        debugger
        return {
            dialogsPage: state.dialogsPage,
            isAuth: state.authUser.isAuth
        }
    };
    let mapDispatchToProps = (dispatch) => {
        return {
            addNewMessage: () => {
                dispatch(addNewMessageActionCreator())
            },
            onMessageChange: (text) => {
                dispatch(onMessageChangeActionCreator(text))
            },
        }

    };

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer;