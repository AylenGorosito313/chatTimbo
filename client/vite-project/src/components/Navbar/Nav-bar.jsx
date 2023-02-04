import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./Nav.module.css";
import { ClearState } from "../../Middleware";
export default function Nav_bar() {
  const { res } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  let backLogin = useHistory();
  const handlerLogout = () => {
    dispatch(ClearState())
    localStorage.clear();
    backLogin.push("/user/login");
  };

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <button onClick={handlerLogout} > Loguot</button>
        {/* <img src={res && res.login.pro} alt=""/> */}
      </div>

    </div>
  );
}
