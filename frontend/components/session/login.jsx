import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/')); // modify the string inside push
    }
    render() {
        return (
            <div className="session-form">
                <h2>Welcome back!</h2>
                <h3>We're so excited to see you again!</h3>
                <form>
                    <label>EMAIL
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')} />
                    </label>
                    <label>PASSWORD
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
                <h4>Need an account?</h4>
                <Link to={'/signup'}>Register</Link>
            </div>
        );
    }
};

export default Login;