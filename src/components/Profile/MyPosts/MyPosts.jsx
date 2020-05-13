import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    debugger


    let posts = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

    const onAddPost = () => {
        props.onAddPost()
    };

    const onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.onPostChange(text)
    };

    return (
        <div>
            <div className={classes.postBlock}>
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
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

