import React from "react";
import ChannelMessageItem from "./channel_message_item";
import ChannelMessagesIndex from "./channel_messages_main";
import ServerSubsIndex from "../server/server_subs_index"

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

  componentDidMount() {
    if (this.props.match.params.channelId) {
       this.props.requestChannelMessages(this.props.match.params.channelId);
    } else {
      this.props.requestConversationMessages(this.props.match.params.conversationId)
    }
     
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.location !== this.props.location) || (prevProps.currentUser !== this.props.currentUser)) { 
      if (this.props.match.params.channelId) {
        this.props.requestChannelMessages(this.props.match.params.channelId);
      } else {
      this.props.requestConversationMessages(this.props.match.params.conversationId)
      }
    }
  }

  render() {
    const { channels, channelMessages, servers, conversations, currentUser } = this.props;
    const channelId = this.props.match.params.channelId;
    const conversationId = this.props.match.params.conversationId;
    const status = (!this.props.match.params.conversationId) ? 'server' : 'conversation';
    const ACid = (status === 'server') ? channelId : conversationId;
    // debugger
    if (status === 'conversation' && (Object.values(conversations).length === 0)) return null;

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0, 0);

    const ElapsedDayConverter = (mili) => {
      return Math.floor(mili / 1000 / 60 / 60 / 24);
    };

    function convert(input) {
      return moment(input, "HH:mm:ss").subtract(4, "hours").format("h:mm A");
    }
    
    const filteredChannelMessages = channelMessages.filter((message) => {
      return Object.values(message.message)[0].messageable_id == ACid;
    });

    const dateStandard2 = (date) => {
      const datemod = [];
      date.split("").forEach((el) => {
        if (el === "-") {
          datemod.push("/");
        } else {
          datemod.push(el);
        }
      });
      return datemod.join("");
    };
    

    let lastUser = null;

    const channelMessageIndex = filteredChannelMessages.map((message, i) => {
      if (message.user.id === lastUser) {
        return (
          <ChannelMessageItem
            message={message}
            key={i}
            lastUser={true}
            today={today}
            ElapsedDayConverter={ElapsedDayConverter}
            convert={convert}
            dateStandard2={dateStandard2}
          />
        );
      } else {
        lastUser = message.user.id;
        return (
          <ChannelMessageItem
            message={message}
            key={i}
            lastUser={false}
            today={today}
            ElapsedDayConverter={ElapsedDayConverter}
            convert={convert}
            dateStandard2={dateStandard2}
          />
        );
      }
    });

    const channelName =
      typeof channels[this.props.match.params.channelId] === "undefined"
        ? ""
        : channels[this.props.match.params.channelId].name;

        
    const currentServer = servers[this.props.match.params.serverId]
    const currentConversation = conversations[this.props.match.params.conversationId]
    const removedSpacesName = (status === "conversation") ? conversations[this.props.match.params.conversationId].name.split(' ').join('') : null;
    const conversationName = (status === "conversation") ? removedSpacesName.split(',').filter(name => { return name !== currentUser.username}).join(', '): null;
    const messageHeader = (status === "server") ? channelName : conversationName

    return (
      <div className="channel-container">
        <div className="channel-message-header">
          <div className="mh-left">
            <img className="hashtag-img-header" src={window.hashtag} />
            <h1 className="cm-header-name">{messageHeader}</h1>
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
            <img className="mh-member" src={window.mh_member} />{" "}
            {/* linkedin placeholder */}
          </div>
        </div>
        <ChannelMessagesIndex channelMessageIndex={channelMessageIndex} />
        <ServerSubsIndex currentServer={currentServer} currentConversation={currentConversation} status={status}/>
      </div>
    );
  }
}

export default ChannelMessage;
