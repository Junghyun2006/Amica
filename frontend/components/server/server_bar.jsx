import React from "react";
import ServerIndexItem from "./server_index_item";

class ServerBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.receiveCurrentUser(this.props.currentUser.id)
    }

    render() {

        const {currentUser} = this.props;

        if (!currentUser.servers) return null;

        const servers = Object.values(currentUser.servers);
        const serverIndex = servers.map((server, i) => { 
            return (
                    <ServerIndexItem server={server} key={i}/>
                );
        })

        return (
            <div className="server-bar-wrapper">
                <ul className="server-index">
                    {serverIndex}
                </ul>
            </div>
        )

    }


} 

export default ServerBar;

