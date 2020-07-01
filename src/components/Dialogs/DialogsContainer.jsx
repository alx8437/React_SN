import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthContainer";

    let mapStateToProps = (state) => {
        return {
            dialogsPage: state.dialogsPage,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)





export default DialogContainer;