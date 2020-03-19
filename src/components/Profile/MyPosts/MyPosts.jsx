import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.item}>
            MyPosts
        <div className={classes.item}>
                NewPost
        </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>
    )
};

export default MyPosts;

