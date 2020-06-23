import React from "react";
import {connect} from "react-redux";
import {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";


class UsersApi extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount)
            })
    }


    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.items);
            })
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
        isFetching: state.usersReducer.isFetching
    }
};



const UsersContainer = connect(mapStateToProps, {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} )(UsersApi)
export default UsersContainer;