import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
            </div>
            <div>
                <img scr="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"></img>
            </div>
            <MyPosts />



        </div>
    )
};

export default Profile;