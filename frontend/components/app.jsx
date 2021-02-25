import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './splash/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import Server from '../components/server/server';
import Modal from './modal/modal';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div className="app">
        <Modal />
        <Switch>
            <Route exact path='/' component={SplashContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <AuthRoute exact path='/login' component={LoginContainer} />
            <ProtectedRoute exact path='/@me' component={HomeContainer} />
            <ProtectedRoute exact path='/servers/:serverId/channels' component={Server} />
        </Switch>
    </div>
);

export default App;