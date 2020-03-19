import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
            </div>
            <div>
                <img scr="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"></img>
            </div>
            <div className={classes.item}>О нас</div>
            <div className={classes.item}>Прочее</div>
            <div className={classes.item}>Прочее</div>
            <div className={classes.item}> Прочее</div>


        </div>
    )
};

export default Profile;