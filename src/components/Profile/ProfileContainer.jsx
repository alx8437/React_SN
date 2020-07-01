import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthContainer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8425
        }
        this.props.setUserProfileThunk(userId)
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
    }
};

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, {setUserProfileThunk})(withUrlDataContainerComponent);

