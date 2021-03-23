import React from "react";

class ChannelMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const {channels} = this.props;

    // if (typeof(channels[this.props.match.params.channelId]) === "undefined") return null; 

    const channelName = (typeof(channels[this.props.match.params.channelId]) === "undefined") ? "" : channels[this.props.match.params.channelId].name
    return (
      <div className="channel-container">
        <div className="channel-message-header">
          <img className="hashtag-img-header" src={window.hashtag} />
          <h1 className="cm-header-name">{channelName}</h1>
        </div>
        <div className="channel-message-container">
          <div className="channel-message-box"></div>
          <div className="server-member-list"></div>
        </div>
      </div>
    );
  }
}

export default ChannelMessage;
