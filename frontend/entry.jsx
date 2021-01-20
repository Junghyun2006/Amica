import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {postUser, postSession, deleteSession} from './utils/session'

document.addEventListener("DOMContentLoaded", () => {
    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Amica</h1>, root)
})