import React from "react";

const ServerPlusModal = ({openModal, createServer, newServerInfo}) => {
    return (
        <div className="server-plus-modal">
            <h1 className="server-plus-title">Create a server</h1>
            <h2 className="server-plus-description">Your server is where you and your friends hang out. Make yours and start talking.</h2>
            <div className="server-plus-option-container">
                <div onClick={() => openModal({
                    modal: 'serverCreate',
                    createServer: createServer,
                    newServerInfo: newServerInfo
                    })} className="server-plus-option">
                    <img className="create-server-img" src={window.createServerSvg}/>
                    <h1>Create My Own</h1>
                    <img className="server-plus-arrow" src={window.serverPlusArrow}/>
                </div>
                <div className="start-template">START FROM A TEMPLATE</div>
                <div className="server-plus-option">
                    <img className="create-server-img" src={window.spGaming}/>
                    <h1>Gaming</h1>
                    <img className="server-plus-arrow" src={window.serverPlusArrow}/>
                </div>
                <div className="server-plus-option">
                    <img className="create-server-img" src={window.spSchoolclub}/>
                    <h1>School Club</h1>
                    <img className="server-plus-arrow" src={window.serverPlusArrow}/>
                </div>
                <div className="server-plus-option">
                    <img className="create-server-img" src={window.spStudygroup}/>
                    <h1>Study Group</h1>
                    <img className="server-plus-arrow" src={window.serverPlusArrow}/>
                </div>
            </div>
            <div className="sp-join-container">
                <h1>Have an invite already?</h1>
                <button>Join a Server</button>
            </div>
            
        </div>
    )
}

export default ServerPlusModal;