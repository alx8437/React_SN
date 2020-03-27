import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, post: 'How are you?', likeCount: 15},
        {id: 2, post: "I'm fine, thanks!", likeCount: 20}
    ];

    let posts = postsData.map(p => <Post message={p.post} likeCount={p.likeCount}/>);


    return (
        <div>
            <div className={classes.postBlock}>`
                <h3>MyPosts</h3>
                <div className={classes.textarea}>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { posts }
            </div>
        </div>


    )
};

export default MyPosts;

