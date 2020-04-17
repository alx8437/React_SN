import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    const onPostChange = () => {

    };

    return (
        <div>
            <div className={classes.postBlock}>
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea onChange={onPostChange} ref={newPostElement} value='hello'/>
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

