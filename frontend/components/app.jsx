import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './splash/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import Splash from './splash/splash';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
//AuthRoutes can't be accessed by people who are ALREADY logged in, 
//ProtectedRoutes can't be accessed by peopple who are NOT logged in
const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Splash}/>
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <AuthRoute exact path='/login' component={LoginContainer}/>
            <ProtectedRoute exact path='/@me'/>
        </Switch>
    </div>
);

export default App;