import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.requestServerChannels(this.props.match.params.serverId)
    }

    render() {
        const {channels} = this.props;

        if (!channels) return null;

        const channelIndex = channels.map((channel, i) => {
            return (
                <ChannelIndexItem channel={channel} key={i} />
            );
        })

        return (
            <div className="channel-index-holder">
                <div className="server-setting">Test Server</div>
                <div className="text-channel">TEXT CHANNEL</div> 
                {channelIndex}
            </div>
        )
    }
}

export default ChannelIndex;