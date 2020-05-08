const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


let store = {

    _rerenderEntireThree() {},


    _state: {

        profilePage: {
            posts: [
                {id: 1, post: 'How are you?', likeCount: 15},
                {id: 2, post: "I'm fine, thanks!", likeCount: 20}
            ],
            newPostText: "123"
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
            newMessageText: "123",

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

    },

    getState() {
      return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 3, post: this._state.profilePage.newPostText, likeCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireThree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._rerenderEntireThree(this._state);
        } else if (action.type === ADD_NEW_MESSAGE) {
            let addMessage = {id: 6, message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(addMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderEntireThree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newTextMessage;
            this._rerenderEntireThree(this._state);
        }
    },

    subscribe(observer){
        this._rerenderEntireThree = observer
    },

};

export const onAddPostActionCreater = () => ({ type: ADD_POST });
export const  onPostChangeActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const addNewMessageActionCreater = () => ({type: ADD_NEW_MESSAGE});
export const onMessageChangeActionCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text})



export default store;