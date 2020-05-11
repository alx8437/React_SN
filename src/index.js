import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/store-redux";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireThree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireThree(state)
});

