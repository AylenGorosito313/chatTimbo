import React from 'react'
import style from "./Register.module.css"
import FormRegister from '../../components/Forms/Register/FormRegister'
import { useSelector } from 'react-redux';
export default function Register() {
  const { res } = useSelector((state) => state.reducer);
  
  setTimeout(function () {
    if (res.register._id) {
      localStorage.setItem("id", res.register._id);
      localStorage.setItem("email", res.register.email);
      localStorage.setItem("username", res.register.username);
      localStorage.setItem("username", res.register.profilePicture);
      navigateToHome.push("/");
    }
  }, 2000);
  return (
    <div><FormRegister /></div>
  )
}
