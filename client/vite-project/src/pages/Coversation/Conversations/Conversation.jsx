
import  axios  from 'axios';
import React, { useEffect, useState } from 'react'

import profile_img from "../../../assets/profileImg.png"
import style from "./conversation.module.css"
export default function Conversation({conversations}) {
  console.log(conversations)
  const [user, setUser] = useState(null);
  const Current_user = localStorage.getItem('id')
  const searchFriend_Id = conversations.members.find((ele)=> ele !== Current_user)
console.log(searchFriend_Id)
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users?userId=${searchFriend_Id}`).then((response) => {
      setUser(response.data);
      
    });
  }, [conversations])


  return (
    <div className={style.conversation}>
     <img className={style.conversationImg} src={user && user.profilePicture ?  user.profilePicture : profile_img }alt="" />
     <span className={style.conversationName}>{ user && user.username}</span>
        </div>
  )
}
