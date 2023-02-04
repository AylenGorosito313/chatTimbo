import React from "react";
import style from "./chatOnline.module.css";

import profile_img from "../../../assets/profileImg.png"
export default function ChatOnline() {
  return (
    <div className={style.chatOnline}>
      <div className={style.chatOnlineFriend}>
        <div className={style.chatOlineImgenContainer}>
          <img className={style.chatOnlineIMG} src="https://res.cloudinary.com/dj8p0rdxn/image/upload/v1675276153/za0cisep5lvje6leiqie.jpg" alt="alt"/>
          <div className={style.chatOnlineBadge}></div>
        </div>
        <div className={style.chatOnlineName}>Clario Pana</div>
      </div>
    </div>
  );
}
