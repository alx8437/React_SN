import React from 'react';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import store from "./redux/store-redux";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));



