import React from "react";
import ChannelIndexItem from "./channel_index_item";
import ServerSettingDD from '../server/server_setting_dd';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {serverSetting: false};
        this.handleServerSetting = this.handleServerSetting.bind(this);
    }

    componentDidMount(){
        this.props.requestServerChannels(this.props.match.params.serverId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            this.props.requestServerChannels(this.props.match.params.serverId)}
    }

    handleServerSetting() {
        const state = this.state.serverSetting
        this.setState({serverSetting: !state})
    }

    render() {
        const {channels, servers} = this.props;
        
        if (!channels || !servers[1]) {
            console.log('test pass')
            return null};

        const channelIndex = channels.map((channel, i) => {
            return (
                <ChannelIndexItem channel={channel} key={i}/>
            );
        })

        const serverName = (servers[this.props.match.params.serverId]) ? servers[this.props.match.params.serverId].name : '';

        const serverSettingDD = (this.state.serverSetting === true) ? <ServerSettingDD /> : null;

        return (
            <div>
                <div className="channel-index-holder">
                    <div className="server-setting-container">
                        <div className="server-setting">{serverName}</div>
                        <div tabIndex="0" onClick={this.handleServerSetting} onBlur={this.handleServerSetting}> 
                             <img className="server-setting-arrow"  src={window.ssDropArrow}/>
                        </div> 
                    </div>
                    <div className="text-channel">TEXT CHANNEL</div> 
                    {channelIndex}
                    {serverSettingDD}
                </div>
               
            </div>   
           
        )
    }
}

//
export default ChannelIndex;