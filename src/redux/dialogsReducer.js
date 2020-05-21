const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage;
            return state;
        case ADD_NEW_MESSAGE:
            let addMessage = {id: 6, message: state.newMessageText};
            state.messages.push(addMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}


export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text})
export default dialogsReducer;