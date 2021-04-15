import React, {useState, useEffect} from "react";
import { deleteChannel, updateChannel } from "../../actions/channel_actions";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router";

const ChannelSettingOverlay = ({
  handleChannelSetting,
  channelName,
  channelId,
  channels
  }) => {
    debugger
  const [tempChannelName, setTempChannelName] = useState(channelName);
  const [channelNameChanged, setChannelNameChanged] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleChannelName = (e) => {
    setTempChannelName(e.target.value)
    if (e.target.value !== channelName) {
      setChannelNameChanged(true)
    } else { setChannelNameChanged(false)}
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (tempChannelName.length) {
      setChannelNameChanged(false)
      return dispatch(updateChannel({
        id: channelId,
        name: tempChannelName
      }))
    } else {
      console.log('error')
    }
  } 

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
                dispatch(deleteChannel(channelId));
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
          <div className={`c-save-changes-container ${saveChange}`}>
            <h1 className="unsaved-changes-text">Careful — you have unsaved changes!</h1>
            <div className='c-save-button-container'>
              <button className="c-save-reset" type='button'>Reset</button>
              <button className="c-save-changes" type='button' onClick={handleUpdate}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ChannelSettingOverlay;
