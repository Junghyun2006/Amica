import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './app';
import actionCable from 'actioncable';

const CableApp = {};
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable') // change to port im using
export const ActionCableContext = createContext()



const Root = ({store}) => (
    <Provider store={store}>
        <ActionCableContext.Provider value={CableApp.cable}>
            <HashRouter>
                <App />
            </HashRouter>
        </ActionCableContext.Provider>
    </Provider>
);

export default Root;