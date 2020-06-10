import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            debugger
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;