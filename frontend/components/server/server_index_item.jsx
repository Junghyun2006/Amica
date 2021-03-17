import React from "react";
import { Link } from "react-router-dom";

const ServerIndexItem = (props) => {
  const { name, id, photoUrl, channels } = props.server;
  const activeChannel = !props.activeChannel ? channels[0] : props.activeChannel
  return (
    <Link to={`/servers/${id}/${activeChannel}`}>
      <div className="server-index-item">
        <img src={photoUrl} className="server-icon" />
        {/* <h1 className="server-icon-name">{name}</h1> */}
      </div>
    </Link>
  );
};

export default ServerIndexItem;
