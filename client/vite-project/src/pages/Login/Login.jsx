import React from 'react'
import style from "./Login.module.css"
import FormLogin from "../../components/Forms/Login/FormLogin"

import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Login() {
  const { res } = useSelector((state) => state.reducer);
  const navigate = useHistory()
useSelector
setTimeout(function () {
  if (res.login._id) {
    localStorage.setItem("id", res.login._id);
    localStorage.setItem("email", res.login.email);
    localStorage.setItem("username", res.login.username);
    localStorage.setItem("username", res.login.profilePicture);

    navigate.push("/");
  }
}, 2000);

    return (
    <>
     <div>
       <h1>Login </h1>
       <FormLogin 
   
       />
     </div>
    </>
   
  )
}
