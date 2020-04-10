import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

    let postText = React.createRef();

    const postMessage = () => {
        let text = postText.current.value;
        props.addPost(text);
    };

    return (
        <div>
            <div className={classes.postBlock}>`
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea ref={postText}></textarea>
                </div>
                <div>
                    <button onClick={postMessage}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { posts }
            </div>
        </div>


    )
};

export default MyPosts;

