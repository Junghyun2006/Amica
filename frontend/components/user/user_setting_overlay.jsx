import React, {useEffect, useState} from "react";

const UserSettingOverlay = ({setActive, logout, currentUser, openModal, receiveCurrentUser}) => {

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
        <div className="us-container"> 
              <h1 className="us-header">MY ACCOUNT</h1>
              <div className="us-setting-box">
                <div className="us-up-setting">
                  <img src={currentUser.avatarUrl} className="us-overlay-icon" />
                  <div className="us-overlay-icon-name">{currentUser.username}<h1 className="us-overlay-tag">#{currentUser.tag}</h1></div>
                </div>
              <div className="us-ind-setting-box">
                <div className="us-ind-setting">
                  <div className="us-settings">
                    <h1 className="us-setting-header">USERNAME</h1>
                    <div className="us-setting-per">{currentUser.username}<h1 className="us-overlay-tag2">#{currentUser.tag}</h1></div>
                  </div>
                  <button onClick={() => openModal({modal: 'userSetting', type: 'username', currentUser: currentUser})} className="us-btn">Edit</button>
                </div>
                <div className="us-ind-setting">
                  <div className="us-settings">
                    <h1 className="us-setting-header">EMAIL</h1>
                    <h1 className="us-setting-per">{currentUser.email}</h1>
                  </div>
                  <button onClick={() => openModal({modal: 'userSetting', type: 'email', currentUser: currentUser})} className="us-btn">Edit</button>
                </div>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingOverlay;
