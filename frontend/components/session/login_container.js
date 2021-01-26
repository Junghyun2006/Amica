import React from 'react';
import { connect } from 'react-redux';
import { login, reset } from '../../actions/session_actions'
import SessionForm from './session_form';

const msp = (state) => {
    return {
        formType: "login",
        userInfo: {
            email: '',
            password: ''
        },
        demo: {
            email: 'demo@gmail.com',
            password: 'password'
        },
        errors: state.errors.session 
    }
}

const mdp = dispatch => {
    return {
        action: formUser => dispatch(login(formUser)),
        resetError: () => dispatch(reset())
    }
};

export default connect(msp,mdp)(SessionForm);

