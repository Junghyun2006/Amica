import React, { useState, useEffect, useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChannelMessages = (props) => {
  const [channel, setChannel] = useState(null);
  const senderId = useSelector((state) => state.session.currentUser.id);
  const { channelId, conversationId } = useParams();
  const [message, setMessage] = useState('');

  const channelName = (channelId) ? "ChatChannel" : "ConversationChannel"
  const m_type = (channelId) ? "Channel" : "Conversation"
  const ACid = (channelId) ? channelId : conversationId

  useEffect(() => {
    const channel = App.cable.subscriptions.create({
      channel: channelName,
      id: ACid,
    });

    setChannel(channel);

    return () => {
      channel.unsubscribe();
      setMessage('')
    };
  }, [ACid]);

  const handleMessageChange = () => {
      return (e) => {
          setMessage(e.target.value)
      }
  }
  
  const dummyDiv = useRef(null);

  useEffect(() => {
    if (dummyDiv.current) dummyDiv.current.scrollIntoView();
  }, [props.channelMessageIndex])

  const sendMessage = (message_body) => {
    const data = {
      messageable_id: ACid,
      messageable_type: m_type,
      sender_id: senderId,
      message_body,
    };
    if (message.length > 0) channel.send(data);
    setMessage('')
  };
  

  return (
    <div>
        <form onSubmit={() => sendMessage(message)}>
            <div className="channel-message-container">
                <img className="chat-attach" src={window.chat_attach} />
                <div className="channel-message-box">
                <div className="channel-message-index">
                  {props.channelMessageIndex}
                  <div ref={dummyDiv}>&nbsp;</div>
                </div>
                <input
                    onChange={handleMessageChange()}
                    className="chat-message"
                    type="text"
                    placeholder="Message #general"
                    value={message}
                />
                </div>
            </div>
        </form>
    </div>
  );
};

export default ChannelMessages;
