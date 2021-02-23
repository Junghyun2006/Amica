import React from "react"
import ServerBarContainer from './server_bar_container'
import ChannelIndexContainer from "../channel/channel_index_container"

class Server extends React.Component {
    constructor(props) {
        super(props)
        this.state = {channels: null}
    }


    render(){
        return (
            <div className="main-server-container">
                <ServerBarContainer />
                <ChannelIndexContainer />
                <div className="channel-container">
                    <div className="channel-message-header"></div>
                    <div className="channel-message-container">
                        <div className="channel-message-box"></div>
                        <div className="server-member-list"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Server;