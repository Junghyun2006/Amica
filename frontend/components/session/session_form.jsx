import React from 'react';
import { Link } from 'react-router-dom';
import DOBDropDown from '../../components/dropdown/dropdown';
import DropDownIndex from '../dropdown/dropdown_index';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.userInfo;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onOptionClicked = this.onOptionClicked.bind(this);
        // this.normalizeDate = this.normalizeDate.bind(this);
        this.renderErrrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.resetError();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    normalizeDate(e) {
        const date = new Date(`${this.state.dob.month} ${this.state.dob.day}, ${this.state.dob.year}`)
            return () => {
                this.setState({ dob: date });
            }  
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.history.push('/')); // modify the string inside push - MOST LIKELY THE ERROR
    }

    onOptionClicked(value) {
        const newState = {...this.state.dob, ...value};
        this.setState({dob: newState});
    }

    renderErrors() {
        const { errors } = this.props;

        return (
            <ul className="errors">
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        const greeting = (this.props.formType === 'signup') ? (
            <div className="greeting">
                <h2 className="create-acc">Create an account</h2>
            </div>
        ) : (
            <div className="greeting">
                <h2>Welcome back!</h2>
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

        const regisButton = (this.props.formType === 'signup') ? 
            (<Link className="login-link" to={'/login'}>Already have an account?</Link>) : (
            <div className="registration">
                <h2 className="need-acc">Need an account?&nbsp;</h2>
                <Link className="regist-link" to={'/signup'}>Register</Link>
            </div>
        );

        const submitButton = (this.props.formType === 'signup') ? 
            (<button onClick={this.normalizeDate()} className="submit-btn-signup">Continue</button>) :
            (<button className="submit-btn">Login</button>)
        
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

        const dropDown = (this.props.formType === 'signup') ? ( 
            <div className="drop-down-container">
                <h1 className="dob-label">DATE OF BIRTH</h1>
                <div className="drop-down-container-2">
                    <DOBDropDown className="ddd" onOptionClicked={this.onOptionClicked} handleInput={this.handleInput} type="Month" />
                    <DOBDropDown className="ddd" onOptionClicked={this.onOptionClicked} handleInput={this.handleInput} type="Day" />
                    <DOBDropDown className="ddd" onOptionClicked={this.onOptionClicked} handleInput={this.handleInput} type="Year" />
                </div>
            </div>
        ) : (null);       

        const tos = (this.props.formType === 'signup') ?
            (<p className="tos">
                By registering, you agree to Amica's <span>Terms of Service</span> and <span>Privacy Policy</span>
            </p>) : (null);

        

        // const renderEmailErr = (this.state.email === '') ? (<span className={`errors ${toggleHidden}`}> - This field is required</span>) : (null)
        // const renderPasswordErr = (this.state.password === '') ? (<span className={`errors ${toggleHidden}`}> - This field is required</span>) : (null)
        
        return (
            
            <div className="session-form-container">
                <div className={formBoxType}>
                    <form onSubmit={this.handleSubmit} className={sessionFormType}>
                        {greeting}
                            <label className="email-label">EMAIL {/*renderEmailErr*/}
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                    className="email-input" />
                            </label>
                        {usernameInput}
                        <label className="password-label">PASSWORD {/*renderPasswordErr*/}
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                className="password-input" />
                        </label>
                        {forgotPassword}
                        {dropDown}
                        {submitButton}
                        {regisButton}                      
                    </form>
                    {qrCode} 
                    {tos}
                </div> 
            </div>
        );
    }
};

export default SessionForm;


