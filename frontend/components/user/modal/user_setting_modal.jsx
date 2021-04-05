import React from "react";

const UserSettingModal = () => {

    const type = "username"

    const header1 = (type === "username") ? "Change your username" : "Enter an email address"
    const header2 = (type === "username") ? "Enter a new username and your existing password." : "Enter an email address and your existing password."
    const label = (type === "username") ? "Username" : "Email"
    
    const handleChange = (e) => {
        console.log('temp')
    }

    const handleSubmit = () => {
        console.log('yo')
    }
    return (
         <>
            <div className="sc-modal-user">
                <div className="channel-close" onClick={() => props.closeModal()}><img className="channel-close-icon" src={window.close}/></div>
                <h1 className="channel-plus-title">{header1}</h1>
                <h1 className="in-text-channels">{header2}</h1>
                <form className="sc-form-user" onSubmit={handleSubmit}>
                    <div className="sc-upload-container">
                        <h1 className="c-name-text">{label}</h1>
                        <input 
                            // onChange={handleChange}
                            type="text"
                            // value={channelName}
                            className="channel-name-input"/>

                        <h1 className="c-name-text">CURRENT PASSWORD</h1>
                         <input 
                            // onChange={handleChange}
                            type="text"
                            // value={channelName}
                            className="channel-name-input"/>
                    </div>
                    <div className="sc-submit-container-user">
                        <button className="c-create-btn">Create Channel</button>
                    </div>
                </form> 
            </div>
        </>

    )
}

export default UserSettingModal; 