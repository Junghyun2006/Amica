import React from "react";

const ChannelSetting = (props) => {
    return (
        <div className="sc-modal-channel">
            <h1 className="channel-plus-title">Create Text Channel</h1>
            <form className="sc-form-channel">
                <div className="sc-upload-container">
                    <h1 className="c-name-text">CHANNEL NAME</h1>
                    <input 
                        type="text"
                        value="new-channel"
                        className="channel-name-input"/>
                    <h1 className="sc-guideline">By creating a channel, you agree to Amica's Community Guidelines.</h1>
                </div>
                <div className="sc-submit-container-channel">
                    <button className="c-create-btn">Create Channel</button>
                </div>
            </form> 
        </div>
    )
}

export default ChannelSetting;