import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.content}>
                ava
                <img className={classes.backimg} src={""}></img>
                <img src={props.profile.photos.large}></img>
                <div>vk - {props.profile.contacts.vk}</div>
                <div>full name - {props.profile.fullName}</div>
                <div>about - {props.profile.aboutMe}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;