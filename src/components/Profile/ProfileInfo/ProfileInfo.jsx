import React from "react";
import classes from './ProfileInfo.module.css';
const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.content}>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
            </div>
            <div>
                <img scr="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"></img>
            </div>
        </div>
    )
};

export default ProfileInfo;