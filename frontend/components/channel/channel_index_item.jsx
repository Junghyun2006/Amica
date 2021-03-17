import React from "react";
import { Link } from "react-router-dom";

const ChannelIndexItem = (props) => {
  const { serverId } = props;
  const { name, id } = props.channel;
  const currActiveChannel =
    props.activeChannel === id.toString() ? "-active-channel" : "";
  return (
    <Link to={`/servers/${serverId}/${id}`} style={{ textDecoration: "none" }}>
      <li className="channel-index-item">
        <h1 className={`channel-text${currActiveChannel}`}>
          <img className="hashtag-img" src={window.hashtag} />
          {name}
        </h1>
        <img className={`channel-setting-icon${currActiveChannel}`} src={window.serverSetting}/>
      </li>
    </Link>
  );
};

export default ChannelIndexItem;
