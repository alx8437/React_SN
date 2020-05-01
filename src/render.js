import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, addNewMessage, updateNewPostText, updateNewMessageText} from "./redux/state";

export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addNewMessage={addNewMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};




