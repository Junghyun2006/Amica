import React from "react";

const ChannelMessageItem = ({ message, lastUser }) => {
  const fMessage = Object.values(message.message)[0];
  const user = message.user;
  const dateStandard =
    fMessage.created_at.slice(5, 10) + "/" + fMessage.created_at.slice(0, 4);
  const time = fMessage.created_at.slice(11, 19);
  const messageDate = new Date(fMessage.created_at);

  function convert(input) {
    return moment(input, "HH:mm:ss").subtract(4, "hours").format("h:mm A");
  }

  const dateAMPM = convert(time);

  const ElapsedDayConverter = (mili) => {
    return Math.floor(mili / 1000 / 60 / 60 / 24);
  };

  const daysElapsed = ElapsedDayConverter(Date.now() - messageDate.getTime());

  const dateStandard2 = (date) => {
    const datemod = [];
    date.split("").forEach((el) => {
      if (el === "-") {
        datemod.push("/");
      } else {
        datemod.push(el);
      }
    });
    return datemod.join("");
  };

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

  const lol = lastUser ? "true" : "false";

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
