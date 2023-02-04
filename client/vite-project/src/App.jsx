import { useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import FormLogin from "./components/Forms/Login/FormLogin";
import Home from "./pages/Home/Home";
import FormRegister from "./components/Forms/Register/FormRegister";
import Nav_bar from "./components/Navbar/Nav-bar";

function App() {
  // axios.defaults.headers.common[
  //   "Authorization"
  // ] = `Bearer ${localStorage.getItem("id")}`;
  return (
    <>

      <Switch>
        <Route exact path={"/"}>
          <Nav_bar/>
          <Route exact path="/" component={Home} />
        </Route>

          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={FormRegister} />
    
        {/* <Route exact path={"/user/register"}>
  
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
