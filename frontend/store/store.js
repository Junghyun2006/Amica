import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import {persistStore} from 'redux-persist'; 

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer, 
        preloadedState,
        applyMiddleware(thunk, logger, persistStore)    
    )
)
export const persistor = persistStore(store)

export default configureStore;