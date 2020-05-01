import {rerenderEntireThree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, post: 'How are you?', likeCount: 15},
            {id: 2, post: "I'm fine, thanks!", likeCount: 20}
        ],
        newPostText: ""
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine, thanks!'},
            {id: 4, message: 'Where are you from?'},
            {id: 5, message: 'I am from Moscow in Russian'},
            {id: 6, message: 'Nice to meet you!'}
        ],
        newMessageText: "",

        dialog: [
            {id: 1, name: 'July'},
            {id: 2, name: 'Robert'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Thomas'},
            {id: 5, name: 'Nadin'},
            {id: 6, name: 'Raichel'}
        ],
    },
    sidebar: [
        {id: 1, name: 'Robert'},
        {id: 2, name: 'Juan'},
        {id: 3, name: 'Rebeca'},
    ]

};

export const addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
};

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireThree(state);
};

export const addNewMessage = (newMessagePost) => {
    let addMessage = {id: 6, message: newMessagePost};
    state.dialogsPage.messages.push(addMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireThree(state);
};

export const  updateNewMessageText = (newTextMessage) => {
    state.dialogsPage.newMessageText = newTextMessage;
    rerenderEntireThree(state);
}




export default state;