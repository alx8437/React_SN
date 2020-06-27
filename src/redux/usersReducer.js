import {getUsers} from "../api/api";
import * as axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            debugger
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };
        default:
            return state;
    }
};

// ActionCreators

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unFollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

// Thunk

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch, getState) => {
    dispatch(setIsFetching(true));
    getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
};

export const onPageChangedThunkCreator = (pageNumber, pageSize) => (dispatch, getState) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    getUsers(pageNumber, pageSize)
        .then(response => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.items));
        });
};


export const unFollowedThunkCreator = (usedId) => (dispatch, getState) => {
    dispatch(toggleFollowingProgress(true, usedId));
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usedId}`,
        {
            withCredentials: true,
            headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
        },
    )
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followUser(usedId));
            }
            dispatch(toggleFollowingProgress(false, usedId));
        });
};

export const followedThunkCreator = (userId) => (dispatch, getState) => {
    dispatch(toggleFollowingProgress(true, userId));
    axios.post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
        },
    )
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowUser(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });


};
export default usersReducer;

