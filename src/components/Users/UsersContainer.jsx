import React from "react";
import {connect} from "react-redux";
import {
    followedThunkCreator,
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    unFollowedThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersApi extends React.Component {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize);
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


const UsersContainer = connect(mapStateToProps, {
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    unFollowedThunkCreator,
    followedThunkCreator,
})(UsersApi);
export default UsersContainer;