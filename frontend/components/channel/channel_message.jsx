import React from "react";

class ChannelMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    return (e) => {
      this.setState({ search: e.target.value });
    };
  }

  render() {
    const { channels } = this.props;

    // if (typeof(channels[this.props.match.params.channelId]) === "undefined") return null;

    const channelName =
      typeof channels[this.props.match.params.channelId] === "undefined"
        ? ""
        : channels[this.props.match.params.channelId].name;
    return (
      <div className="channel-container">
        <div className="channel-message-header">
          <div className="mh-left">
            <img className="hashtag-img-header" src={window.hashtag} />
            <h1 className="cm-header-name">{channelName}</h1>
          </div>
          <div className="mh-right">
            <img className="mh-mute" src={window.mh_mute} />
            <img className="mh-pin" src={window.mh_pin} />
            <img className="mh-member" src={window.mh_member} />
            <input
              className="mh-search"
              type="text"
              value={this.state.search}
              placeholder="Search"
              onChange={this.handleSearch()}
            />
            <img className="mh-magnify" src={window.mh_magnify} />
            <img className="mh-member" src={window.mh_member} /> {/* linkedin placeholder */}
            
          </div>
        </div>
        <div className="channel-message-container">
          <img className='chat-attach' src={window.chat_attach} />
          <div className="channel-message-box">
            <input 
              className="chat-message"
              type="text"
              placeholder="Message #general"
            />
          </div>
          <div className="server-member-list"></div>
        </div>
      </div>
    );
  }
}

export default ChannelMessage;
