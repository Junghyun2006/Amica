import React from "react";
import { logout } from "../../actions/session_actions";
import { deleteServer } from "../../utils/server_utils";
import { deleteSubscription } from "../../utils/sub_utils";

const UserSettingOverlay = ({setActive, logout}) => {
  return (
    <div className="ssp-container">
      <div className="ssp-left">
        <div className="ssp-option-container">
          <h1 className="ssp-server-name">User Setting</h1>
          <div className="ssp-overview-container">
            <h2 className="ssp-overview">My Account</h2>
            <div className="ssp-divider"></div>
            <div
              onClick={() =>
                logout()
              }
              className="ssp-delete"
            >
              Log Out
            </div>
          </div>
        </div>
      </div>
      <div className="ssp-right">
        <div onClick={() => setActive()} className="ssp-exit">
          <div className="ssp-close-circle"></div>
          <img className="ssp-x" src={window.sspExit} />
        </div>
      </div>
    </div>
  );
};

export default UserSettingOverlay;
