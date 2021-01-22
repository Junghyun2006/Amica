import React from 'react';
import { Link } from 'react-router-dom';
// import QrImage from '../../../app/assets/images/qr_img.png';

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

        const days = () => {
            const arr = [];
            for (let i = 1; i <= 31; i++) {
                arr.push(<option value={i.toString()} key={`days-${i}`} className="dropdown-day" >{i}</option>)
            }
            return arr;
        }

        const years = () => {
            const arr = [];
            for (let i = 2018; i > 1869; i--) {
                arr.push(<option value={i.toString()} key={`years-${i}`} className="dropdown-year">{i}</option >)
            }
            return arr;
        }

        const dateInput = (this.props.formType === 'signup') ? (
            <div className="dob">
                <label className="dob-label">DATE OF BIRTH
                    <select className="month-input">
                        <option value="month" className="dropdown-month">Month</option>
                        <option value="january" className="dropdown-month">January</option>
                        <option value="february" className="dropdown-month">February</option>
                        <option value="march" className="dropdown-month">March</option>
                        <option value="april" className="dropdown-month">April</option>
                        <option value="may" className="dropdown-month">May</option>
                        <option value="june" className="dropdown-month">June</option>
                        <option value="july" className="dropdown-month">July</option>
                        <option value="august" className="dropdown-month">August</option>
                        <option value="september" className="dropdown-month">September</option>
                        <option value="october" className="dropdown-month">October</option>
                        <option value="november" className="dropdown-month">November</option>
                        <option value="december" className="dropdown-month">December</option>
                    </select>
                    <select className="day-input">
                        <option value="day" className="dropdown-day">Day</option>
                        {days()}
                    </select>
                    <select className="year-input">
                        <option value="year" className="dropdown-year">Year</option>
                        {years()}
                    </select>
                </label>
            </div>
        ) : (null);

        const regisButton = (this.props.formType === 'signup') ? (null) : (
            <div className="registration">
                <h2 className="need-acc">Need an account?&nbsp;</h2>
                <Link className="regist-link" to={'/signup'}>Register</Link>
            </div>
        );

        const submitButton = (this.props.formType === 'signup') ? 
            ('Continue') : ("Login");
        
        const sessionFormType = (this.props.formType === 'signup') ? 
            ('signup-form') : ('login-form');

        const formBoxType = (this.props.formType === 'signup') ?
            ('signup-box') : ('login-box');

        const forgotPassword = (this.props.formType === 'signup') ? (null) : (
            <div>
                <input type="submit" className="demo-user-btn" onClick={() =>
                    this.setState({ email: this.props.demo.email, password: this.props.demo.password })} value="Log in as Demo User"></input>
            </div>
        );

        const qrCode = (this.props.formType === 'signup') ? (null) : (
            <div className="demo-user">
                <img src={window.qrcodeURL} className="qr-code" />
                <h2>Log in with QR Code</h2>
                <h3>Scan this with the <strong>Discord mobile app</strong> to log in instantly </h3>
            </div>   
            );    
        
        return (
            
            <div className="session-form-container">
                <div className={formBoxType}>
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
                        {dateInput}
                    </form>
                    {qrCode}                         
                </div> 
            </div>
        );
    }
};

export default SessionForm;




