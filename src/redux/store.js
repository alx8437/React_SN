import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";




let store = {

    _rerenderEntireThree() {},


    _state: {

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
                {id: 6, name: 'Raichel'},
                {id: 7, name: 'Rob'}
            ]
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireThree(this._state);
    },

    subscribe(observer){
        this._rerenderEntireThree = observer
    },

};


export default store;