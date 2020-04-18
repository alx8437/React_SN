import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, newMessage, updateNewPostText} from "./redux/state";

export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newMessage={newMessage}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};




