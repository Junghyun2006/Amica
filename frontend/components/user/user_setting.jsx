import React from 'react';

const UserSetting = ({currentUser}) => {
    return (
        <div className='user-setting-container'>
            <img src={currentUser.avatarUrl} className="user-setting-icon" />
            <div className="username-tag-container">
                <h1 className="user-setting-username">{currentUser.username}</h1>
                {/* <h1 className="tag">#{currentUser.tag}</h1> */}
                <h1 className="tag">#1231</h1>
            </div>
            <img className={`server-setting-cog`} src={window.serverSetting}/>
        </div>
    )
}

export default UserSetting;