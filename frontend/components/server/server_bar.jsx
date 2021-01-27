import React from "react";
import ServerIndexItem from "./server_index_item"

class ServerBar extends React.Component {
    constructor(props) {
        super(props);
    }
    /* change ServerImg after AWS */
    componentDidMount(){
        // this.props.receiveCurrentUser(window.currentUser.id)
    }

    render(){
        const {servers} = this.props;
        const serverIndex = servers.map((server, i) => <ServerIndexItem serverName={server.name} serverImage={null} key={`server-${i}`} />) 

        
        return (
            <div>
                <ul className="server-index">
                    {serverIndex}
                </ul>
            </div>
        ) 

    }


} 

export default ServerBar;