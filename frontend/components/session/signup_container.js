import { connect } from 'react-redux';
import { createNewUser, reset } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
    return {
        formType: "signup",
        userInfo: {
            email: '',
            password: '',
            username: '',
            dob: ''
        },
        errors: state.errors.session
    }
}

const mdp = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    resetError: () => dispatch(reset())
    
});

export default connect(msp, mdp)(SessionForm);