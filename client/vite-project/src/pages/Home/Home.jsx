import React, { useEffect } from "react";

import Mensseger from "../Coversation/Menssager/Mensseger";
import { useDispatch } from "react-redux";

import { GetConvCurrentUser } from "../../Middleware/index";
function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetConvCurrentUser());
  }, []);

  return (
    <>
     
      <div>
        <Mensseger />
      </div>
    </>
  );
}

export default Home;
