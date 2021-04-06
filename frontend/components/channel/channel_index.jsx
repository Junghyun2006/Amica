import React from "react";
import ChannelIndexItem from "./channel_index_item";
import ServerSettingDD from "../server/server_setting_dd";
import ServerSetting from "../server/server_setting";
import ChannelSettingOverlay from "../channel/channel_setting_overlay";
import UserSetting from "../user/user_setting";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverSetting: false,
      serverSettingP: false,
      deleted: false,
      channelSettingOverlay: false,
    };
    this.handleServerSetting = this.handleServerSetting.bind(this);
    this.handleServerSettingP = this.handleServerSettingP.bind(this);
    this.handleChannelSetting = this.handleChannelSetting.bind(this);
  }

  componentDidMount() {
    this.props.requestServerChannels(this.props.match.params.serverId);
    this.props.handleActiveChannels(
      this.props.match.params.serverId,
      this.props.match.params.channelId
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      this.props.requestServerChannels(this.props.match.params.serverId);
      this.props.handleActiveChannels(
        this.props.match.params.serverId,
        this.props.match.params.channelId
      );
    }
    
  }

  handleServerSetting() {
    const state = this.state.serverSetting;
    this.setState({ serverSetting: !state });
  }

  handleServerSettingP() {
    const state = this.state.serverSettingP;
    this.setState({ serverSettingP: !state });
  }

  handleChannelSetting() {
    const state = this.state.channelSettingOverlay;
    this.setState({ channelSettingOverlay: !state });
  }
  
  render() {
    const { channels, servers, logout, receiveCurrentUser, currentUser } = this.props;
    if (!channels ) return null;
    

    const channelIndex = channels.map((channel, i) => {
      const aChannel = !this.props.activeChannels
        ? null
        : this.props.activeChannels[this.props.match.params.serverId];
      return (
        <ChannelIndexItem
          serverId={this.props.match.params.serverId}
          channel={channel}
          key={i}
          activeChannel={aChannel}
          handleChannelSetting={this.handleChannelSetting}
          currentUser={currentUser}
        />
      );
    });

    const push = this.props.history.push;

    const serverName = servers[this.props.match.params.serverId]
      ? servers[this.props.match.params.serverId].name
      : "";

    const serverSettingDD =
      this.state.serverSetting === true ? (
        <ServerSettingDD
          handleServerSettingP={this.handleServerSettingP}
          push={push}
          serverId={this.props.match.params.serverId}
          openModal={this.props.openModal}
        />
      ) : null;
    const serverSettingP =
      this.state.serverSettingP === true ? (
        <ServerSetting
          serverName={serverName}
          handleServerSettingP={this.handleServerSettingP}
          serverId={this.props.match.params.serverId}
          push={push}
        />
      ) : null;
    const channelSettingOverlay =
      this.state.channelSettingOverlay === true ? (
        <ChannelSettingOverlay
          handleChannelSetting={this.handleChannelSetting}
          channelName={
            this.props.channelsTwo[this.props.match.params.channelId].name
          }
          channelId={this.props.match.params.channelId}
        />
      ) : null;

    return (
      <div>
        {channelSettingOverlay}
        {serverSettingDD}
        <div className="channel-index-holder">
          <div className="server-setting-container">
            <div className="server-setting">{serverName}</div>
            <div
              tabIndex="0"
              onClick={this.handleServerSetting}
              onBlur={this.handleServerSetting}
            >
              <img className="server-setting-arrow" src={window.ssDropArrow} />
            </div>
          </div>
          <div className="text-channel-container">
            <div className="text-channel">TEXT CHANNELS</div>
            <div
              className="channel-settings"
              onClick={() =>
                this.props.openModal({
                  modal: "channel",
                  serverId: this.props.match.params.serverId,
                  push: push,
                })
              }
            >
              <svg
                className="text-channel-plus"
                aria-hidden="false"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <polygon
                  fill="currentColor"
                  points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                ></polygon>
              </svg>
            </div>
          </div>
          {channelIndex}
        </div>
        {serverSettingP}
        <UserSetting currentUser={currentUser} logout={logout} push={push} openModal={this.props.openModal} receiveCurrentUser={receiveCurrentUser}/>
      </div>
    );
  }
}

export default ChannelIndex;
