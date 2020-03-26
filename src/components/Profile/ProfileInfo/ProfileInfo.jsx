import React from "react";
import classes from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.content}>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
            </div>
        </div>
    )
};

export default ProfileInfo;