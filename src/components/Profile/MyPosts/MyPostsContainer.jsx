import React from 'react';
import {onAddPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    const onAddPost = () => {
        props.store.dispatch(onAddPostActionCreator())
    };

    const onPostChange = (text) => {
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action)
    };

    return (
        <div>
            <MyPosts
                onPostChange={onPostChange}
                onAddPost={onAddPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
            />
        </div>
    )
};

export default MyPostsContainer;

