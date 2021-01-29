import React from 'react';
import { Link } from 'react-router-dom';
import ServerBarContainer from '../server/server_bar_container';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push('/')); // modify the string inside push - MOST LIKELY THE ERROR
    }

    render() {

        return (
            <div className="home-wrapper">
                <ServerBarContainer />
                {/* <button onClick={this.handleSubmit}>Logout</button>   */}
            </div>
            

        )
    }
}

export default HomePage;