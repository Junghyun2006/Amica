import React from "react";
import ServerBarContainer from "./server_bar_container";
import ChannelIndexContainer from "../channel/channel_index_container";
import ChannelMessageContainer from "../channel/channel_message_container"

class Server extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeChannels: null};
    this.handleActiveChannels = this.handleActiveChannels.bind(this);
  }

  handleActiveChannels(server, channel) {
    this.setState({activeChannels: {...this.state.activeChannels, [server]: channel}})
  }
  

  render() {
    return (
      <div className="main-server-container">
        <ServerBarContainer activeChannels={this.state.activeChannels}/>
        <ChannelIndexContainer activeChannels={this.state.activeChannels} handleActiveChannels={this.handleActiveChannels}/>
        <ChannelMessageContainer />
      </div>
    );
  }
}

export default Server;
