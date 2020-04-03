import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [
    {id: 1, name: 'July'},
    {id: 2, name: 'Robert'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Thomas'},
    {id: 5, name: 'Nadin'},
    {id: 6, name: 'Raichel'}
];

let messagesData = [
    {id: 0, message: 'Hello!'},
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'I am fine, thanks!'},
    {id: 3, message: 'Where are you from?'},
    {id: 4, message: 'I am from Moscow in Russian'},
    {id: 5, message: 'Nice to meet you!'}
];

let postsData = [
    {id: 1, post: 'How are you?', likeCount: 15},
    {id: 2, post: "I'm fine, thanks!", likeCount: 20}
];

ReactDOM.render(<App message={messagesData} dialog={dialogData} posts={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
