import React from 'react';
import { connect } from 'react-redux';
import { logout, reset } from '../../actions/session_actions';
import HomePage from './home';

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        resetError: () => dispatch(reset())
    }
};

export default connect(null, mdp)(HomePage);

