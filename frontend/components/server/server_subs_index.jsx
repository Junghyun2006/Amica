import React from 'react';
import ServerSubsIndexItem from "./server_subs_index_item"

const ServerSubsIndex = ({currentServer}) => {
    if (!currentServer) return null;
    
    const serverSubs = Object.values(currentServer.subscriptions)
    const serverCount = serverSubs.length
    const serverSubsList = serverSubs.map((sub, i) => {
        return <ServerSubsIndexItem sub={sub} key={i}/>
    })

    return (
        <div className="server-member-list">
            <div className="server-member-container">
                <h1 className="text-members">MEMBERS&nbsp;—&nbsp;{serverCount} </h1>
                {serverSubsList}
            </div>
        </div>
    )
}

export default ServerSubsIndex;