import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/state";

let rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};


rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree);

