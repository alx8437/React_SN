import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

    let postText = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = postText.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div>
            <div className={classes.postBlock}>
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea
                        onChange={onPostChange}
                        ref={postText}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )

};

export default MyPosts;

