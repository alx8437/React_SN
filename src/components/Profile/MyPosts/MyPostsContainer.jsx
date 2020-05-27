import {onAddPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
        onAddPost: () => {
            dispatch(onAddPostActionCreator())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

