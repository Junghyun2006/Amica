import React from 'react';
import ReactDOM, { render } from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListender("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
})