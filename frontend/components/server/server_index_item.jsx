import React from 'react';
import {Link} from "react-router-dom";

const ServerIndexItem = (props) => {
    const {name, id, photoUrl} = props.server;
    // debugger
    return (
        <Link to={`/servers/${id}/channels`}>
            <div className="server-index-item">
                <img src={photoUrl} className="server-icon"/>
                <h1 className="server-icon-name">{name}</h1>
            </div>
            
        </Link>
    )
}

export default ServerIndexItem;