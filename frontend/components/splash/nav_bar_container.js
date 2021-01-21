import React from 'react';
import { connect } from 'react-redux';
import navBar from './nav_bar'
import { logout } from '../../actions/session_actions'

const msp = state => {
    return {
        currentUser: state.session.currentUser
    };
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(msp, mdp)(navBar);