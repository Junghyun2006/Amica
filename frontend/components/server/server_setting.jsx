import React from "react";
import { deleteServer } from "../../utils/server_utils";
import { deleteSubscription } from "../../utils/sub_utils";

const ServerSetting = (props) => {
  return (
    <div className="ssp-container">
      <div className="ssp-left">
        <div className="ssp-option-container">
          <h1 className="ssp-server-name">{props.serverName.toUpperCase()}</h1>
          <div className="ssp-overview-container">
            <h2 className="ssp-overview">Overview</h2>
            <div className="ssp-divider"></div>
            <div
              onClick={() =>
                deleteServer(props.serverId).then(() => 
                    {deleteSubscription({subscribeable_id: props.serverId, subscribeable_type: 'Server'})
                    props.push("/@me")})
              }
              className="ssp-delete"
            >
              Delete Server
            </div>
          </div>
        </div>
      </div>
      <div className="ssp-right">
        <div onClick={() => props.handleServerSettingP()} className="ssp-exit">
          <div className="ssp-close-circle"></div>
          <img className="ssp-x" src={window.sspExit} />
        </div>
      </div>
    </div>
  );
};

export default ServerSetting;
