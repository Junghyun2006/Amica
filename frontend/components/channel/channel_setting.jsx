import React, {useState} from "react";
import {createChannel} from "../../utils/channel_utils"



const ChannelSetting = (props) => {

    const [channelName, setChannelName] = useState('')

    const handleChange = (e) => setChannelName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        createChannel({channel: {name: channelName, server_id: props.serverId}, push: props.push});
        props.closeModal();
    }
    
    return (
        <>
            
            <div className="sc-modal-channel">
                <div className="channel-close" onClick={() => props.closeModal()}><img className="channel-close-icon" src={window.close}/></div>
                <h1 className="channel-plus-title">Create Text Channel</h1>
                <h1 className="in-text-channels">In Text Channels</h1>
                <form className="sc-form-channel" onSubmit={handleSubmit}>
                    <div className="sc-upload-container">
                        <h1 className="c-name-text">CHANNEL NAME</h1>
                        <input 
                            onChange={handleChange}
                            type="text"
                            value={channelName}
                            className="channel-name-input"/>
                        <h1 className="sc-guideline">By creating a channel, you agree to Amica's Community Guidelines.</h1>
                    </div>
                    <div className="sc-submit-container-channel">
                        <button className="c-create-btn">Create Channel</button>
                    </div>
                </form> 
            </div>
        </>
    )
}

export default ChannelSetting;