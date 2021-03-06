import React, { useState, useRef, useEffect } from "react";
import { openModal } from "../../../actions/modal_actions";
import * as SubAPIUtil from "../../../utils/sub_utils";

const ServerCreateModal = ({
  closeModal,
  openModal,
  createServer,
  newServerInfo,
  push,
  handleActiveServer,
}) => {

  const defaultImg = { url: "", file: null };
  const [newServerName, setNewServerName] = useState(newServerInfo.name);
  const [serverImg, setServerImg] = useState(defaultImg);
  const inputFile = useRef(null);
  
  const handleChange = (e) => setNewServerName(e.target.value);
  
  const handleRefresh = () => {
    setServerImg(defaultImg);
    inputFile.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newServerName.length > 0) {
      const serverFormData = new FormData();
      serverFormData.append("server[name]", newServerName);
      if (serverImg.file) {serverFormData.append("server[photo]", serverImg.file)};
      createServer({ serverFormData, push, handleActiveServer });
    }
    closeModal();
    handleRefresh();
  };




  const handleServerImg = () => {
    inputFile.current.click();
  };

  const handleFileChange = (e) => {
    const fileReader = new FileReader();
    const [file] = e.currentTarget.files;
    fileReader.onloadend = () => setServerImg({ url: fileReader.result, file });

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      handleRefresh();
    }
  };

  const {file, url} = serverImg;

  return (
    <div className="sc-modal">
      <div className="server-plus-close" onClick={() => {
        handleRefresh();
        closeModal()}}>
        <img className="server-plus-close-icon" src={window.close} />
      </div>
      <h1 className="server-plus-title">Customize your server</h1>
      <h2 className="server-plus-description">
        Give your new server a personality with a name and an icon. You can
        always change it later.
      </h2>
      <form className="sc-form" onSubmit={handleSubmit}>
        <div className="sc-upload-container">
          <input
            type="file"
            id="upload-server-img"
            onChange={handleFileChange}
            accept=".jpg,.png,.gif,.jpeg"
            ref={inputFile}
          />
          <div className="sc-upload-img">
            {(file) ? <img
              className="add-server-img-2"
              src={url}
            /> :  <img
              className="add-server-img"
              onClick={handleServerImg}
              src={window.spImportImg}
            />}
          </div>
          <h1 className="sc-name-text">SERVER NAME</h1>
          <input
            onChange={handleChange}
            type="text"
            value={newServerName}
            className="sc-server-name-input"
          />
          <h1 className="sc-guideline">
            By creating a server, you agree to Amica's Community Guidelines.
          </h1>
        </div>
        <div className="sc-submit-container">
          <div
            className="sc-back"
            onClick={() =>
              openModal({
                modal: "serverPlus",
                createServer: createServer,
                newServerInfo: newServerInfo,
              })
            }
          >
            Back
          </div>
          <button className="sc-create-btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default ServerCreateModal;
