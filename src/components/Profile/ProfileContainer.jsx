import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";

class ProfileApi extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`,
            {
                withCredentials: true,
                headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"}
            }
        )
            .then(res => {
                this.props.setUserProfile()
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => {

}

const ProfileContainer = connect(mapStateToProps, {})(ProfileApi)

export default ProfileContainer