import React from "react";
import ServerIndexItem from "./server_index_item";
import { Link } from "react-router-dom";

class ServerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.newServerInfo;
    this.handleActiveServer = this.handleActiveServer.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
    this._isMounted = false;

  }

  componentDidMount() {
    this._isMounted = true;
    this.props.receiveCurrentUser(this.props.currentUser.id).then(this.handleRefresh());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeServer !== this.state.activeServer) {
      this.props.receiveCurrentUser(this.props.currentUser.id).then(this.handleRefresh());
    }
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  handleRefresh() {
    this.setState({activeServer: null})
  }
  
  handleActiveServer(serverId) {
    if (this._isMounted) this.setState({ activeServer: serverId});
  }

  render() {
    const { currentUser, servers } = this.props;

    if (!servers) return null;

    const serverIndex = servers.map((server, i) => {
      const activeChannel = (!this.props.activeChannels) ? null : this.props.activeChannels[server.id]
      return <ServerIndexItem  server={server} key={i} activeChannel={activeChannel} />;
    });

    const activeHome = (!this.props.match.params.serverId) ? <div className={`active-home-item`}></div> : null;
    const activeHomeIcon = (!this.props.match.params.serverId) ? 'active-home' : null;

    return (
      <div className="server-bar-holder">
        {activeHome}
        <Link to="/@me" className={`home-btn-container ${activeHomeIcon}`}>
          <img className="home-btn" src={window.logo} />
        </Link>
        <div className="bar-divider" />
        <ul className="server-bar-index">{serverIndex}</ul>
        <div
          onClick={() =>
            this.props.openModal({
              modal: "serverPlus",
              createServer: this.props.createServer,
              newServerInfo: this.state,
              push: this.props.history.push,
              handleActiveServer: this.handleActiveServer
            })
          }
          className="add-server-btn-container"
        >
          <p className="add-server-btn">+</p>
        </div>
        <div className="bar-divider" />
      </div>
    );
  }
}

export default ServerBar;
