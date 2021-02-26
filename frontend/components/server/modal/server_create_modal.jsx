import React, {useState} from "react";
import { openModal } from "../../../actions/modal_actions";

const ServerCreateModal = ({openModal, createServer, newServerInfo}) => {

    const [newServerName, setNewServerName] = useState(newServerInfo.name);
    const handleChange = (e) => setNewServerName(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createServer({name: newServerName})
    }

    return (
        <div className="sc-modal">
            <h1 className="server-plus-title">Customize your server</h1>
            <h2 className="server-plus-description">Give your new server a personality with a name and an icon. You can always change it later.</h2>
            <form className="sc-form" onSubmit={handleSubmit}>
                <div className="sc-upload-container">
                    <div className="sc-upload-img"><img src={window.spImportImg}/></div>
                    <h1 className="sc-name-text">SERVER NAME</h1>
                    <input 
                        onChange={handleChange}
                        type="text"
                        value={newServerName} //place holder
                        className="sc-server-name-input"/>
                    <h1 className="sc-guideline">By creating a server, you agree to Amica's Community Guidelines.</h1>
                </div>
                <div className="sc-submit-container">
                    <div className="sc-back" onClick={() => openModal({
                        modal:'serverPlus', 
                        createServer: createServer, 
                        newServerInfo: newServerInfo,
                        test: 'hello'})}>Back</div>
                    <button className="sc-create-btn">Create</button>
                </div>
            </form> 
        </div>
    )
}

export default ServerCreateModal;