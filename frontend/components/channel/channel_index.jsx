import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.requestServerChannels(this.props.match.params.serverId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            this.props.requestServerChannels(this.props.match.params.serverId)}
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

        return (
            <div className="channel-index-holder">
                <div className="server-setting">{serverName}</div>
                <div className="text-channel">TEXT CHANNEL</div> 
                {channelIndex}
            </div>
        )
    }
}

//
export default ChannelIndex;