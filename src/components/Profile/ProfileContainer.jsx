import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {userId = 8425}
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
            {
                withCredentials: true,
                headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"}
            }
        )
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile
    }
};

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);

