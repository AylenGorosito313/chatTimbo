import React from "react";
import style from "./message.module.css";
import {format} from "timeago.js"
import profile_img from "../../../assets/profileImg.png";

export default function Message({ m, own }) {

  const time = new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes();
  return (
    <div className={own ? `${style.messsage_own} ` : `${style.messsage}   `}>
      <div className={style.messageTop}>
        <img className={style.message_Img} src={profile_img} alt="profile" />
        <p
          className={
            own ? `${style.message_text_own} ` : `${style.message_text}   `
          }
        >
          {m?.text}
        </p>
      </div>
      <div className={style.messageButtom}>{format(m.createAt)}</div>
    </div>
  );
}
