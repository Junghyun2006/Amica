import React, {useState} from "react";

const ConversationCreateFriendII = ({ friend, addConvMember, removeConvMember, decMemberCount, incMemberCount, memberCount }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
      if (memberCount > 0) setChecked(!checked);
      if (!checked && memberCount > 0) {
          addConvMember(friend);
          decMemberCount();
        } else if (checked) {
            removeConvMember(friend);
            incMemberCount()
            setChecked(!checked)
        };
    }

  const checkedToggle = checked ? "checked" : null;

  return (
    <div className="conversation-create-friend-ii-cont">
      <img className="friend-avatar-icon" src={friend.avatarUrl}></img>
      <div className="cc-f-user-info-cont">
        <h1 className="cc-f-username1">{friend.username}</h1>
        <h1 className="cc-f-username2">{friend.username}</h1>
        <h1 className="cc-f-tag">#{friend.tag}</h1>
      </div>
      <div className={`check-box ${checkedToggle}`} onClick={() => handleCheck()}><img className={`cc-f-check ${checkedToggle}`} src={window.check}></img></div>
    </div>
  );
};

export default ConversationCreateFriendII;
