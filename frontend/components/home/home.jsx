import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
        this.props.resetError();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push('/')); // modify the string inside push - MOST LIKELY THE ERROR
    }

    render(){
        return (
            <button onClick={this.handleSubmit}>Logout</button>
        )
       
    }
}

export default HomePage;