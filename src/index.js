import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addPost, addNewMessage, updateNewPostText, updateNewMessageText, subscribe} from "./redux/state";
import ReactDOM from "react-dom";

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


rerenderEntireThree(state);

subscribe(rerenderEntireThree);

