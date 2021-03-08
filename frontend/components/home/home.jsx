import React from "react";
import { Link } from "react-router-dom";
import ServerBarContainer from "../server/server_bar_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleActiveServer = this.handleActiveServer.bind(this);
    this.state = {
      active_server: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/")); // modify the string inside push - MOST LIKELY THE ERROR
  }

  handleActiveServer(serverId) {
    this.setState({ active_server: serverId });
  }

  render() {
    return (
      <div className="home-wrapper">
        <ServerBarContainer handleActiveServer={this.handleActiveServer} />
        <div className="channel-index-holder"></div>
        <div className="channel-container">
          <div className="friend-header"></div>
          <div className="friend-container">
            <div className="friend-box"></div>
            <div className="friend-status"></div>
          </div>
        </div>
        <button className="logout-btn" onClick={this.handleSubmit}>
          Logout
        </button>
      </div>
    );
  }
}

export default HomePage;
