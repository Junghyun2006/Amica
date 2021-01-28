import React from 'react';

const ServerIndexItem = (props) => {
    const {name, photoUrl} = props.server;
    return (
        <li className="server-index-item">
            <img src={photoUrl} className="server-icon"/>
        </li>  
    )
}

export default ServerIndexItem;