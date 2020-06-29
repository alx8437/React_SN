import {userApi} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, post: 'How are you?', likeCount: 15},
        {id: 2, post: "I'm fine, thanks!", likeCount: 20},
    ],
    newPostText: "",
    userProfile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.user,
            };
        default:
            return state;
    }
};


export const onAddPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, user});


export const setUserProfileThunk = (userId) => (dispatch, getState) => {
    userApi.set(userId)
        .then(res => {
           dispatch(setUserProfile(res.data));
        });
};

export default profileReducer;