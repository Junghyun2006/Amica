import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {receiveChannelMessage} from "../../actions/channel_actions"

const ChannelIndexItem = (props) => {
  const { serverId, channel } = props;
  const { name, id } = props.channel;
  const dispatch = useDispatch();
  const currActiveChannel =
    props.activeChannel === id.toString() ? "-active-channel" : "";

  useEffect(() => {
    App.cable.subscriptions.create(
      { channel: 'ChatChannel', id: id },
      {
        received: (data) => {
          dispatch(receiveChannelMessage(data))
        },
      }
    )
    console.log('use effect ran')
  }, [channel, dispatch])

  return (
    <Link to={`/servers/${serverId}/${id}`} style={{ textDecoration: "none" }}>
        <li className="channel-index-item">
            <h1 className={`channel-text${currActiveChannel}`}>
            <img className="hashtag-img" src={window.hashtag} />
            {name}
            </h1>
            <img onClick={() => props.handleChannelSetting()} className={`channel-setting-icon${currActiveChannel}`} src={window.serverSetting}/>
        </li>
    </Link>
        
   
  );
};

export default ChannelIndexItem;
