import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push('/')) // modify the string inside push
    }
    render(){
        return (
            <div className="session-form">
                <h2>Create an account</h2>
                <form>
                    <label>EMAIL
                        <input type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}/>
                    </label>
                    <label>USERNAME
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')} />
                    </label>
                    <label>PASSWORD
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>
                </form>
                
                

            </div>
        );
    }
};

export default Signup;