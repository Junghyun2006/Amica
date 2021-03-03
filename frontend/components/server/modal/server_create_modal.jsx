import React, {useState, useRef} from "react";
import { openModal } from "../../../actions/modal_actions";

const ServerCreateModal = ({openModal, createServer, newServerInfo}) => {

    const [newServerName, setNewServerName] = useState(newServerInfo.name);
    const handleChange = (e) => setNewServerName(e.target.value);
    const [serverImg, setServerImg] = useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createServer({name: newServerName});
        const formData = new FormData();
        formData.append('server[name]', newServerName);
        formData.append('server[photo]', serverImg);
        createServer(formData)
    }

    const inputFile = useRef(null);

    const handleServerImg = () => {
        inputFile.current.click()
    }

    const handleFileChange = (e) => { 
        setServerImg(e.currentTarget.files[0])
    }

    return (
        <div className="sc-modal">
            <h1 className="server-plus-title">Customize your server</h1>
            <h2 className="server-plus-description">Give your new server a personality with a name and an icon. You can always change it later.</h2>
            <form className="sc-form" onSubmit={handleSubmit}>
                <div className="sc-upload-container">
                    <input 
                        type="file"
                        id="upload-server-img"
                        onChange={handleFileChange}
                        accept=".jpg,.png,.gif,.jpeg"
                        ref={inputFile}
                        />
                    <div className="sc-upload-img"><img className="add-server-img" onClick={handleServerImg} src={window.spImportImg}/></div>
                    <h1 className="sc-name-text">SERVER NAME</h1>
                    <input 
                        onChange={handleChange}
                        type="text"
                        value={newServerName}
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