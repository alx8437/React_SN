import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={classes.item}>
                MyPosts
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>

            </div>
            <div className={classes.item}>
                NewPost
            </div>
            <Post message='How are you?' like='15' />
            <Post message="I'm fine, thanks" like='20' />



        </div>


    )
};

export default MyPosts;

