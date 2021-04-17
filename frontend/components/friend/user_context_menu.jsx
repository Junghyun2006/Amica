import React from 'react';
import useRightClickMenu from "./use_right_click_menu";
import FriendCtx from "../friend/friend_ctx";

const UserContextMenu = ({currentUser}) => {
    const {xPos, yPos, showMenu, dataSet} = useRightClickMenu();

    if (!showMenu) return null;

    let component;

    switch (dataSet.ctxtype) {
        case "friend":
            component = (
                <FriendCtx dataSet={dataSet} currentUser={currentUser}/>
            )
            break;
        default:
            break;
    }

    return (
        <div style={{position: 'fixed', top: yPos, left: xPos}}>
            {component}
        </div>
        
    )
}

export default UserContextMenu;