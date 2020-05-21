const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, post: 'How are you?', likeCount: 15},
        {id: 2, post: "I'm fine, thanks!", likeCount: 20}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 3, post: state.newPostText, likeCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}


export const onAddPostActionCreator = () => ({ type: ADD_POST });
export const  onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export default profileReducer;