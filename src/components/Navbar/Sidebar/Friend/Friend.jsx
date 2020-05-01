import React from "react";
import styles from './Friend.module.css';
import friend from './icons/friend.jpg'

const Friend = (props) => {
    return (
        <div className={styles.friendsAva}>
            <div>
                <img src={friend} alt="Avatar"/>
                {props.name}
            </div>
        </div>

    )

};


export default Friend;