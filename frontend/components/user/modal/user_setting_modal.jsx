import React, {useState, useEffect} from "react";
import { closeModal } from "../../../actions/modal_actions";
import {useDispatch} from 'react-redux';

const UserSettingModal = ({type, updateUser, currentUser, closeModal, receiveCUser}) => {

    const header1 = (type === "username") ? "Change your username" : "Enter an email address"
    const header2 = (type === "username") ? "Enter a new username and your existing password." : "Enter an email address and your existing password."
    const label = (type === "username") ? "USERNAME" : "EMAIL"
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState(currentUser.username)
    const [email, setEmail] = useState(currentUser.email)
    const [errors, setErrors] = useState(false)
    const [passwordLabel, setPasswordLabel] = useState('CURRENT PASSWORD')
    const dispatch = useDispatch();
    
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const errorTrue = (errors) ? 'error-true' : ''


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {password, username, email, id: currentUser.id}
        updateUser(user).then(user => {
            closeModal()
            dispatch(receiveCUser(currentUser.id))
        }, errors => {
            if (errors.responseJSON) {
                setErrors(true)
                setPasswordLabel(`${errors.responseJSON[0][0]} - ${errors.responseJSON[0][1]}`)}
        })
    }

    return (
         <>
            <div className="sc-modal-user">
                <div className="channel-close" onClick={() => closeModal()}><img className="channel-close-icon" src={window.close}/></div>
                <h1 className="channel-plus-title">{header1}</h1>
                <h1 className="in-text-user">{header2}</h1>
                <form className="sc-form-user" onSubmit={handleSubmit}>
                    <div className="sc-upload-container">
                        <h1 className="u-name-text">{label}</h1>
                        <input 
                            onChange={(type==='username') ? handleUsernameChange : handleEmailChange}
                            type="text"
                            value={(type==='username') ? username : email}
                            className="channel-name-input"/>

                        <h1 className={`u-name-text ${errorTrue}`}>{passwordLabel}</h1>
                         <input 
                            onChange={handlePasswordChange}
                            type="password"
                            value={password}
                            className="channel-name-input"/>
                    </div>
                    <div className="sc-submit-container-user">
                        <button className="u-create-btn">Done</button>
                    </div>
                </form> 
            </div>
        </>

    )
}

export default UserSettingModal; 