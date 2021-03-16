import React from "react";
import ChannelIndexItem from "./channel_index_item";
import ServerSettingDD from "../server/server_setting_dd";
import ServerSetting from "../server/server_setting";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serverSetting: false, serverSettingP: false, deleted: false, activeChannel: null};
    this.handleServerSetting = this.handleServerSetting.bind(this);
    this.handleServerSettingP = this.handleServerSettingP.bind(this);
  }

  componentDidMount() {
    this.props.requestServerChannels(this.props.match.params.serverId);
    this.setState({activeChannel: this.props.match.params.channelId})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {

        // this.props.requestServers();
        this.props.requestServerChannels(this.props.match.params.serverId);
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

  render() {
    const { channels, servers } = this.props;

    if (!channels || !servers[1]) {
      return null;
    }

    const channelIndex = channels.map((channel, i) => {
      return <ChannelIndexItem channel={channel} key={i} activeChannel={channel.id === activeChannel}/>;
    });

    const serverName = servers[this.props.match.params.serverId]
      ? servers[this.props.match.params.serverId].name
      : "";

    const serverSettingDD =
      this.state.serverSetting === true ? (
        <ServerSettingDD handleServerSettingP={this.handleServerSettingP} />
      ) : null;
    const serverSettingP =
      this.state.serverSettingP === true ? (
        <ServerSetting
          serverName={serverName}
          handleServerSettingP={this.handleServerSettingP}
          serverId={this.props.match.params.serverId}
          push={this.props.history.push}
        />
      ) : null;

    return (
      <div>
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
          <div className="text-channel">TEXT CHANNEL</div>
          {channelIndex}
        </div>
        {serverSettingP}
      </div>
    );
  }
}

export default ChannelIndex;
