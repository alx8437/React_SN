import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {


        posts: [
            {id: 1, post: 'How are you?', likeCount: 15},
            {id: 2, post: "I'm fine, thanks!", likeCount: 20}
        ],


    },

    dialogsPage: {

        messages: [
            {id: 0, message: 'Hello!'},
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'I am fine, thanks!'},
            {id: 3, message: 'Where are you from?'},
            {id: 4, message: 'I am from Moscow in Russian'},
            {id: 5, message: 'Nice to meet you!'}
        ],

        dialog: [
            {id: 1, name: 'July'},
            {id: 2, name: 'Robert'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Thomas'},
            {id: 5, name: 'Nadin'},
            {id: 6, name: 'Raichel'}
        ],
    }

};

export const addPost = (postText) => {
    let newPost = {id: 3, post: postText, likeCount: 0}
    state.profilePage.posts.push(newPost);
    console.log(state.profilePage.posts);
    rerenderEntireThree();
};





export default state;