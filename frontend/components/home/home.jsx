import React from "react";
import { Link, Route} from "react-router-dom";
import ServerBarContainer from "../server/server_bar_container";
import FriendConversationIndex from '../friend/friend_conversation_index';
import Friend from '../friend/friend';
import ChannelMessageContainer from "../channel/channel_message_container"



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_server: null,
      activeChannels: null
    };
  }

  componentDidMount() {
    this.props.requestFriends();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.location !== this.props.location) || (prevProps.currentUser !== this.props.currentUser)) { 
      this.props.requestFriends();
      this.props.receiveCurrentUser;
    }
  }

  render() {
    const {currentUser, logout, openModal, friends, conversations} = this.props;
    const push = this.props.history.push;

    if (!friends) return null;

    return (
      <div className="home-wrapper">
        <ServerBarContainer />
        <FriendConversationIndex currentUser={currentUser} logout={logout} push={push} openModal={openModal} friends={friends} conversations={conversations}/>
        <Route
          exact path="/@me"
          render={() => (
            <Friend friends={friends} conversations={conversations} currentUser={currentUser}/>
          )}
        />
        <Route path="/@me/conversations/:conversationId" component={ChannelMessageContainer} />
      </div>
    );
  }
}

export default HomePage;
