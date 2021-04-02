import React from "react";

const ChannelMessageItem = ({ message, lastUser, today, ElapsedDayConverter, convert, dateStandard2 }) => {
  const fMessage = Object.values(message.message)[0];
  const user = message.user;
  const dateStandard =
    fMessage.created_at.slice(5, 10) + "/" + fMessage.created_at.slice(0, 4);
  const time = fMessage.created_at.slice(11, 19);
  const messageDate = new Date(fMessage.created_at);

  const dateAMPM = convert(time);

  messageDate.setHours(0);
  messageDate.setMinutes(0);
  messageDate.setSeconds(0, 0);

  const daysElapsed = ElapsedDayConverter(today - messageDate.getTime());

  let date = dateStandard2(dateStandard);

  switch (daysElapsed) {
    case 0:
      date = `Today at ${dateAMPM}`;
      break;
    case 1:
      date = `Yesterday at ${dateAMPM}`;
      break;
    default:
      break;
  }

  const messageContainer = lastUser ? (
    <h1 className="cmi-body-solo">{fMessage.message_body}</h1>
  ) : (
    <div className="cmi-message-container">
      <img src={user.avatarUrl} className="avatar-icon" />
      <div className="cmi-message-wo-av">
        <div className="cmi-username-date">
          <h1 className="cmi-username">{user.username}</h1>
          <h1 className="cmi-created-at">{date}</h1>
        </div>
        <h1 className="cmi-body">{fMessage.message_body}</h1>
      </div>
    </div>
  );

  return (
    <>
      {messageContainer}
    </>
  );
};

export default ChannelMessageItem;
