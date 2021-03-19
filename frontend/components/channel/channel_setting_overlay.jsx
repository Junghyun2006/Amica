import React, {useState, useEffect} from "react";
import { deleteChannel, updateChannel } from "../../utils/channel_utils";

const ChannelSettingOverlay = ({
  handleChannelSetting,
  channelName,
  channelId,
  }) => {

  const [tempChannelName, setTempChannelName] = useState(channelName);
  const [channelNameChanged, setChannelNameChanged] = useState(false);
  
  const handleChannelName = (e) => {
    setTempChannelName(e.target.value)
    if (e.target.value !== channelName) {
      setChannelNameChanged(true)
    } else { setChannelNameChanged(false)}
  };

  const saveChange = (!channelNameChanged) ? 'save-inactive' : null;

  return (
    <div className="ssp-container">
      <div className="ssp-left">
        <div className="ssp-option-container">
          <div className="ssp-server-name">
            # {tempChannelName}
            <h1 className="channel-category">&nbsp;Text Channel</h1>
          </div>
          <div className="ssp-overview-container">
            <h2 className="ssp-overview">Overview</h2>
            <div className="ssp-divider"></div>
            <div
              className="ssp-delete"
              onClick={() => {
                deleteChannel(channelId);
                handleChannelSetting();
              }}
            >
              Delete Channel
            </div>
          </div>
        </div>
      </div>
      <div className="ssp-right">
        <div onClick={() => handleChannelSetting()} className="ssp-exit">
          <div className="ssp-close-circle"></div>
          <img className="ssp-x" src={window.sspExit} />
        </div>
        <div className="cs-right-settings-container">
          <h1 className="cs-right-overview">OVERVIEW</h1>
          <h1 className="cs-right-channel-name">CHANNEL NAME</h1>
          <input className="cs-right-cn-input" 
            onChange={handleChannelName}
            type="text"
            value={tempChannelName}></input>
          <h1 className="cs-right-channel-name">CHANNEL TOPIC</h1>
          <textarea maxLength="1024" placeholder="Let everyone know how to use this channel!" className="cs-right-ct-input" type="text"></textarea>
        </div>
        <div className={`c-save-changes ${saveChange}`}>
          HELLO
        </div>
      </div>

      
    </div>
  );
};

export default ChannelSettingOverlay;
