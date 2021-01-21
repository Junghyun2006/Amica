import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form';

const msp = (state) => {
    return {
        formType: "login",
        userInfo: {
            email: '',
            password: ''
        },
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        action: formUser => dispatch(login(formUser))
    }
};

export default connect(msp,mdp)(SessionForm);