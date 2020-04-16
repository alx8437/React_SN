import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addPost} from "./redux/state";

export let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root'));
};




