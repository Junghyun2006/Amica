import React from "react";

class ChannelMessage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    
    const {channels} = this.props;
    if (!channels || Object.values(channels).length === 0) return null; 

    return (
      <div className="channel-container">
        <div className="channel-message-header">
          <img className="hashtag-img-header" src={window.hashtag} />
          <h1 className="cm-header-name">{channels[this.props.match.params.channelId].name}</h1>
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
