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
                <img src={"https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"}></img>
                <img src={props.profile.photos.large}></img>
            </div>
        </div>
    )
};

export default ProfileInfo;