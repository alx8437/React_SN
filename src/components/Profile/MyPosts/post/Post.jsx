import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../assets/images/userNoPhoto.png'

const Post = (props) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={avatar} alt="avatar" />
                <div className={styles.messageWrapper}>{props.message}</div>
            </div>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    )
};

export default Post;





