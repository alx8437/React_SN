import React from "react";
import {connect} from "react-redux";
import {getUsersThuncCreator, onPageChangedThuncCreator} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersApi extends React.Component {


    componentDidMount() {
        this.props.getUsersThuncCreator(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThuncCreator(pageNumber, this.props.pageSize)
    };

    render() {

        return (
            <>
                {this.props.isFetching === true ? <Preloader /> : null}
                < Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    toggleIsFollow={this.props.toggleIsFollow}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        toggleIsFollow: state.usersReducer.followingInProgress
    }
};



const UsersContainer = connect(mapStateToProps, {getUsersThuncCreator, onPageChangedThuncCreator})(UsersApi);
export default UsersContainer;