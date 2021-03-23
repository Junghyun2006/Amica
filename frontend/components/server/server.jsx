import React from "react";
import ServerBarContainer from "./server_bar_container";
import ChannelIndexContainer from "../channel/channel_index_container";
import ChannelMessageContainer from "../channel/channel_message_container"

class Server extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeChannels: null, loading: false};
    this.handleActiveChannels = this.handleActiveChannels.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleActiveChannels(server, channel) {
    this.setState({activeChannels: {...this.state.activeChannels, [server]: channel}})
  }

  handleLoading() {
    this.setState({loading: true})
  }
  
  // componentDidMount() {
  //   this.setState({loading: true})
  // }


  render() {
    
    return (
      <div className="main-server-container">
        <ServerBarContainer activeChannels={this.state.activeChannels}/>
        <ChannelIndexContainer activeChannels={this.state.activeChannels} handleActiveChannels={this.handleActiveChannels}/>
        <ChannelMessageContainer/>
      </div>
    );
  }
}

export default Server;
