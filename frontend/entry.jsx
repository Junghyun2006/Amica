import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListender("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Amica</h1>)
})