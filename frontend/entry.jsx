import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {postUser, postSession, deleteSession} from './utils/session';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore(preloadedState);
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = deleteSession;
    let preloadedState = undefined;
    


    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root);
})