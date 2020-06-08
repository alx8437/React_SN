import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
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
            dispatch(setUsersAC(users))
        }
    }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;