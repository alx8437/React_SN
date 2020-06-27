import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.content}>
                My profile
                <img src={props.profile.photos.large}></img>
                <div className={styles.otherResurces}>
                    <div>vk - {props.profile.contacts.vk}</div>
                    <div>Full name - {props.profile.fullName}</div>
                    <div>about - {props.profile.aboutMe}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;