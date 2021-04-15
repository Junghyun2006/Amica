import React from "react";
import { Link, useParams } from "react-router-dom";

const ServerIndexItem = (props) => {
  const { name, id, photoUrl, channels } = props.server;
  const {serverId} = useParams();
  const activeChannel = !props.activeChannel ? channels[0] : props.activeChannel;
  const activeServer = (serverId == id) ? 'active-server' : '';
  const activeServerIcon = (serverId == id) ? 'active-server-icon' : '';
  const activeServerIcon2 = (serverId == id) ? 'active-server-icon2' : '';
  // const activeServerIcon2 = (serverId == id) ? 'active-server-icon2' : '';
  const serverNameInitial = () => {
    const initials = name.split(" ");
    if (initials.length > 1) {
      return initials[0][0] + initials [1][0]
    } else {
      return initials[0][0]
    }
  }

  const serverImg = (photoUrl) ? <img src={photoUrl} className={`server-icon ${activeServerIcon}`} /> : <button className={`no-photo ${activeServerIcon2}`}>{serverNameInitial()}</button>

  return (
    <Link to={`/servers/${id}/${activeChannel}`} style={{ textDecoration: 'none' }}>
      <div className="server-index-item">
        <div className="server-index-item-container">
          {serverImg}
          <div className={`active-server-item ${activeServer}`}></div>
        </div>
      </div>
    </Link>
  );
};

export default ServerIndexItem;
