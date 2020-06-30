import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8425
        }
        this.props.setUserProfileThunk(userId)
    }

    render() {

        if (!this.props.isAuth) {return  <Redirect to={"/login"}></Redirect>}


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
        profile: state.profilePage.userProfile,
        isAuth: state.authUser.isAuth
    }
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfileThunk})(withUrlDataContainerComponent);

