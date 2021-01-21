import React from 'react';
import { Link } from 'react-router-dom';
// import QrImage from '../../../0.resources/amika_images/qr_img.png';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.userInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.history.push('/')); // modify the string inside push
    }

    renderErrors() {
        const { errors } = this.props;

        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        const greeting = (this.props.formType === 'signup') ? (
            <div className="greeting">
                <h2>Create an account</h2>
            </div>
        ) : (
            <div className="greeting">
                <h2> Welcome back!</h2>
                <h3>We're so excited to see you again!</h3>
            </div>   
        );

        const usernameInput = (this.props.formType === 'signup') ? (
            <label className="username-label">USERNAME
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')} 
                        className="username-input"/>
                </label>
        ) : (null);

        const regisButton = (this.props.formType === 'signup') ? (null) : (
            <div className="registration">
                <h2 className = "need-acc">Need an account? </h2>
                <Link className="regist-link" to={'/signup'}>&nbsp;Register</Link>
            </div>
        );

        const submitButton = (this.props.formType === 'signup') ? 
            ('Register') : ("Login");
        
        const sessionFormType = (this.props.formType === 'signup') ? 
            ('signup-form') : ('login-form');

        const forgotPassword = (this.props.formType === 'signup') ? (null) : (
            <div>
                <Link className="forgot-password" to={'/'}>Forgot your password?</Link>
            </div>
        );

        return (
            
            <div className="session-form-container">
                <div className="login-box">
                    <form onSubmit={this.handleSubmit} className={sessionFormType}>
                        {greeting}
                        <label className="email-label">EMAIL 
                            {this.renderErrors()}
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                className="email-input" />
                        </label>
                        {usernameInput}
                        <label className="password-label">PASSWORD
                            {this.renderErrors()}
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                className="password-input" />
                        </label>
                        {forgotPassword}
                        <button className="submit-btn">{submitButton}</button>
                        {regisButton}
                    </form>
                </div>
                {/* <div>
                    <img src={QrImage}/>
                </div> */}
            </div>
        );
    }
};

export default SessionForm;