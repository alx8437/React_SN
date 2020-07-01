import React from "react";
import {connect} from "react-redux";
import {
    followedThunkCreator,
    getUsersThunkCreator,
    unFollowedThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthContainer";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    };

    render() {

        return (
            <>
                {this.props.isFetching === true ? <Preloader/> : null}
                < Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    toggleIsFollow={this.props.toggleIsFollow}
                    unFollowedThunkCreator={this.props.unFollowedThunkCreator}
                    followedThunkCreator={this.props.followedThunkCreator}
                />

            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        toggleIsFollow: state.usersReducer.followingInProgress,
    };
};

const withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
    getUsersThunkCreator,
    unFollowedThunkCreator,
    followedThunkCreator,
})(withRedirect);

