import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChannelMessages = (props) => {
  const [channel, setChannel] = useState(null);
  const senderId = useSelector((state) => state.session.currentUser.id);
  const { channelId } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const channel = App.cable.subscriptions.create({
      channel: "ChatChannel",
      id: channelId,
    });

    setChannel(channel);

    return () => {
      channel.unsubscribe();
      setMessage('')
    };
  }, [channelId]);

  const handleMessageChange = () => {
      return (e) => {
          setMessage(e.target.value)
      }
  }

  const sendMessage = (message_body) => {
    const data = {
      messageable_id: channelId,
      messageable_type: "Channel",
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
                <div className="channel-message-index">{props.channelMessageIndex}</div>
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
