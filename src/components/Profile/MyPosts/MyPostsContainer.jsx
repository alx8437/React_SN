import React from 'react';
import {onAddPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import MyContext from "../../../MyContext";


const MyPostsContainer = (props) => {

    return ( <MyContext.Consumer>
        {store => {

            let state = store.getState();

            const onAddPost = () => {
                store.dispatch(onAddPostActionCreator())
            };

            const onPostChange = (text) => {
                let action = onPostChangeActionCreator(text)
                store.dispatch(action)
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
        }
        }
    </MyContext.Consumer> )

    // let state = props.store.getState()
    //
    // const onAddPost = () => {
    //     props.store.dispatch(onAddPostActionCreator())
    // };
    //
    // const onPostChange = (text) => {
    //     let action = onPostChangeActionCreator(text)
    //     props.store.dispatch(action)
    // };
    //
    // return (
    //     <div>
    //         <MyPosts
    //             onPostChange={onPostChange}
    //             onAddPost={onAddPost}
    //             posts={state.profilePage.posts}
    //             newPostText={state.profilePage.newPostText}
    //         />
    //     </div>
    // )
};

export default MyPostsContainer;

