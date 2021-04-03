import React, {useState} from 'react';
import UserSettingOverlay from './user_setting_overlay'

const UserSetting = ({currentUser, logout, push}) => {
    const [userSettingActive, setUserSettingActive] = useState(false);

    
    const setActive = () => {
        setUserSettingActive(!userSettingActive)
    }

    const handleLogout = () => {
        logout().then(() => push("/"))
    }

    const userSetting = (userSettingActive) ? <UserSettingOverlay setActive={setActive} logout={handleLogout}/> : null;

    return (
        <>
            <div className='user-setting-container'>
                <img src={currentUser.avatarUrl} className="user-setting-icon" />
                <div className="username-tag-container">
                    <h1 className="user-setting-username">{currentUser.username}</h1>
                    {/* <h1 className="tag">#{currentUser.tag}</h1> */}
                    <h1 className="tag">#1231</h1>
                </div>
                <img onClick={() => setActive()}className={`server-setting-cog`} src={window.serverSetting}/>
            </div> 
            {userSetting}
        </>
    )
}

export default UserSetting;