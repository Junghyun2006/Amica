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
                <div className="server-bar-holder">
                    <Link to='/@me' className="home-btn-container"><img className="home-btn"src={window.logo}/></Link>
                    <div className='bar-divider'/>
                    <ServerBarContainer/>
                    <div className='bar-divider' />
                    <div className="add-server-btn-container"><p className="add-server-btn">+</p></div>
                </div>
               
                <button onClick={this.handleSubmit}>Logout</button>
            </div>
        )
    }
}

export default HomePage;