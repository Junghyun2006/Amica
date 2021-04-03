import React from "react";
import { Link, useParams } from "react-router-dom";

const ServerIndexItem = (props) => {
  const { name, id, photoUrl, channels } = props.server;
  const {serverId} = useParams();
  const activeChannel = !props.activeChannel ? channels[0] : props.activeChannel;
  const activeServer = (serverId == id) ? 'active-server' : '';
  const activeServerIcon = (serverId == id) ? 'active-server-icon' : '';

  return (
    <Link to={`/servers/${id}/${activeChannel}`}>
      <div className="server-index-item">
        <div className="server-index-item-container">
          <img src={photoUrl} className={`server-icon ${activeServerIcon}`} />
          <div className={`active-server-item ${activeServer}`}></div>
        </div>
      </div>
    </Link>
  );
};

export default ServerIndexItem;
