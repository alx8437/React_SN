import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={classes.postBlock}>
                <h3>MyPosts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='How are you?' likeCount='15'/>
                <Post message="I'm fine, thanks" likeCount='20'/>
            </div>


        </div>


    )
};

export default MyPosts;

