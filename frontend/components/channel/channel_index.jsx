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
        if (prevProps.location !== this.props.location) this.props.requestServerChannels(this.props.match.params.serverId)
    }

    render() {
        const {channels} = this.props;
        
        if (!channels) return null;

        const channelIndex = channels.map((channel, i) => {
            return (
                <ChannelIndexItem channel={channel} key={i}/>
            );
        })

        return (
            <div className="channel-index-holder">
                <div className="server-setting">{this.props.servers[this.props.match.params.serverId].name}</div>
                <div className="text-channel">TEXT CHANNEL</div> 
                {channelIndex}
            </div>
        )
    }
}

export default ChannelIndex;