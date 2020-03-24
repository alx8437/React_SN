import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <br></br>
            <div className={classes.item}>
                <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="avatar" />
                { props.message }
            </div>
            <div>
                <span>like { props.likeCount }</span>
            </div>
            <br></br>
        </div>

    )
};

export default Post;