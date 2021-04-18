import React, { useState } from "react";
import useRightClickMenu from "./use_right_click_menu";
import FriendCtx from "../friend/friend_ctx";
import { useHistory } from "react-router";
import UserSettingOverlay from "../user/user_setting_overlay";

const UserContextMenu = ({
  currentUser,
  conversations,
  openModal,
  receiveCurrentUser,
  logout,
}) => {
  const { xPos, yPos, showMenu, dataSet } = useRightClickMenu();
  const [userSettingActive, setUserSettingActive] = useState(false);
  const history = useHistory();

  //   if (!showMenu) return null;
  const setActive = () => {
    setUserSettingActive(!userSettingActive);
  };

  const handleLogout = () => {
    logout().then(() => history.push("/"));
  };

  const userSetting = userSettingActive ? (
    <UserSettingOverlay
      currentUser={currentUser}
      setActive={setActive}
      logout={handleLogout}
      openModal={openModal}
      receiveCurrentUser={receiveCurrentUser}
    />
  ) : null;

  let component;

  switch (dataSet.ctxtype) {
    case "friend":
      component = (
        <FriendCtx
          dataSet={dataSet}
          currentUser={currentUser}
          conversations={conversations}
          setActive={setActive}
        />
      );
      break;
    default:
      break;
  }

  return (
    <>
      {userSetting}
      {showMenu ? (
        <div
          className="context-menu"
          style={{ position: "fixed", top: yPos, left: xPos }}
        >
          {component}
        </div>
      ) : null}
    </>
  );
};

export default UserContextMenu;
