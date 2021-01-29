import React from 'react';
import {Link} from "react-router-dom";

const ServerIndexItem = (props) => {
    const {name, id, photoUrl} = props.server;
    return (
        <li className="server-index-item">
            <Link to={`/servers/${id}/channels`}><img src={photoUrl} className="server-icon"/></Link>
        </li>  
    )
}

export default ServerIndexItem;