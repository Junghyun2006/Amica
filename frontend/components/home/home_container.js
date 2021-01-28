import React from 'react';
import { connect } from 'react-redux';
import { logout, reset } from '../../actions/session_actions';
import HomePage from './home';
import {receiveCUser} from '../../actions/user_action'


const msp = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        resetError: () => dispatch(reset()),
        receiveCurrentUser: userId => dispatch((receiveCUser(userId)))
    }
};

export default connect(msp, mdp)(HomePage);

