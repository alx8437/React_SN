import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/store-redux";
import {Provider} from "react-redux";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));

};

rerenderEntireThree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireThree(state)
});

