import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css"

const Profile = (props) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
};

export default Profile;