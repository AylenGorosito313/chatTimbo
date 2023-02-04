import React from "react";
import { useState } from "react";
import style from "./FormLogin.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserLogin } from "../../../Middleware/index";

function FormLogin() {
  const [showPassword, setshowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" }, mode: "onChange" });

  const togglePass = () => {
    setshowPassword(!showPassword);
  };
  const dispatch = useDispatch()
  const OnSubmit = async (data) => {
    // console.log(data);
    // console.log(verify);
    dispatch(createUserLogin(data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)} className="form">
        <label className="label">Email</label>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email..."
            className="input-login"
            {...register("email", {
              maxLength: 100,
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
        </div>
        {errors.email?.type === "required" && (
          <p className="p-error-input">'The email is required'</p>
        )}
        {errors.email?.type === "maxLength" && (
          <p className="p-error-input">'The email is too long'</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="p-error-input">'The email format is wrong'</p>
        )}
        <label className="label">Password</label>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password..."
            className="input-login"
            {...register("password", {
              maxLength: 12,
              required: true,
              // pattern:
              //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            })}
          />
          <div onClick={togglePass}>
            <i className="fa-solid fa-eye ojito"></i>
          </div>
        </div>

        {errors.password?.type === "required" && (
          <p className="p-error-input">'The passwordis required'</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="p-error-input">'The passwordformat is wrong'</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="p-error-input">
            'Must be alphanumeric and contain a maximum of 12 characters, one
            capital letter and one special character'
          </p>
        )}

        <div className="div-link-checkbox">
          <div className="checkbox-container">
            <input type="checkbox" {...register("checkbox-remember")} />
            <label className="label"> Remember me</label>
          </div>
          <Link className="link" to={"/user/recuperacion"}>
            <p>Forgot Password ?</p>
          </Link>
        </div>
        {/* */}
        <div className="boton-container">
          <div className="field button_field">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
