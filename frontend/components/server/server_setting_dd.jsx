import React from "react";

const ServerSettingDD = (props) => {
  return (
    <div className="ss-container">
      <div className="server-setting-option-inv">
        <div className="ss-text-invite">Invite People</div>
        <svg
          className="ss-invite"
          aria-hidden="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#738BD8"
            d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
          ></path>
        </svg>
      </div>
      <div onMouseDown={() => {props.handleServerSettingP()} } className="server-setting-option">
        <div className="ss-text">Server Settings</div>
        <svg
          className="ss-setting"
          aria-hidden="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B9BBBE"
            d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          ></path>
        </svg>
      </div>
      <div className="server-setting-option">
        <div className="ss-text">Create Channel</div>
        <svg
          className="ss-create-channel"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#B9BBBE"
            d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ServerSettingDD;
