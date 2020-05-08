import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import {onAddPostActionCreater, onPostChangeActionCreater} from "../../../redux/state";



const MyPosts = (props) => {
    let posts = props.profilePage.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

    const onAddPost = () => {
        props.dispatch(onAddPostActionCreater())
    };

    const onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(onPostChangeActionCreater(text))
    };

    return (
        <div>
            <div className={classes.postBlock}>
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )

};

export default MyPosts;

