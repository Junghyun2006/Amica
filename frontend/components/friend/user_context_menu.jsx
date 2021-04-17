import React from 'react';
import useRightClickMenu from "./use_right_click_menu";
import FriendCtx from "../friend/friend_ctx";

const UserContextMenu = ({currentUser, conversations}) => {
    const {xPos, yPos, showMenu, dataSet} = useRightClickMenu();

    if (!showMenu) return null;

    let component;

    switch (dataSet.ctxtype) {
        case "friend":
            component = (
                <FriendCtx dataSet={dataSet} currentUser={currentUser} conversations={conversations}/>
            )
            break;
        default:
            break;
    }


    return (
        <div className="context-menu" style={{position: 'fixed', top: yPos, left: xPos}}>
            {component}
        </div>
        
    )
}

export default UserContextMenu;