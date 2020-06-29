import React from 'react';
import styles from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {

    let posts = props.profilePage.posts.map(p => <Post message={p.post} likeCount={p.likeCount}/>);
    const onAddPost = () => {
        props.onAddPost();
    };

    const onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.onPostChange(text);
    };

    return (
        <div className={styles.postWrapper}>
            <div className={styles.postBlock}>
                <div className={styles.textarea}>
                    <textarea
                        className={styles.textarea}
                        placeholder={"Write what your wish"}
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <div >
                    <button className={styles.button} onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    );

};

export default MyPosts;

