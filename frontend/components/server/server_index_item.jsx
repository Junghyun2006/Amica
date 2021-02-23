import React from 'react';
import {Link} from "react-router-dom";

const ServerIndexItem = (props) => {
    const {name, id, photoUrl} = props.server;
    // debugger
    return (
        <Link to={`/servers/${id}/channels`}>
            <div className="server-index-item"><img src={photoUrl} className="server-icon"/></div>
        </Link>
    )
}

export default ServerIndexItem;