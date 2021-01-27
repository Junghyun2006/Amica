import React from 'react';

const ServerIndexItem = ({serverName}) => {
    return (
        <li className="server-index-item">
            <h1>{serverName}</h1>
        </li>  
    )
}

export default ServerIndexItem;