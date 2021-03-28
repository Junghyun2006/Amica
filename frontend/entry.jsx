import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {deleteSession} from './utils/session';
import {requestUser} from './utils/user_utils';
import {requestChannelMessages} from './utils/channel_utils';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }

    const store = configureStore(preloadedState);
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = deleteSession;
    window.requestUser = requestUser;
    window.requestChannelMessages = requestChannelMessages;


    ReactDOM.render(<Root store={store}/>, root);
})