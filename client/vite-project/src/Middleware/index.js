import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
    responseLogin,
    responseRegister,
    responseConversations,
    ClearSession


} from "../reducer/reducerSlider"
let url = "http://localhost:3001" // http://localhost:3001


// export const LoginUser = ({email, password, username, profile_img }) => {
//     return async function (dispatch) {
//       try {
//         let res = await axios({
//           method: "POST",
//           data: {email, password, username, profile_img},
//           url: `${url} /api/auth/login`,
//         });
//         dispatch(responseLogin(res.data));
//       } catch (error) {
//         toast.error(error.request.response, {
//           position: "bottom-right",
//           duration: 4000,
  
//           style: {
//             borderRadius: "10px",
//             background: "#333",
//             color: "#fff",
//           },
//         });
//       }
//     };

export const ClearState = () => {
  return async function (dispatch) {  
    dispatch(ClearSession());}

}

  export const createUserLogin = ({username, email, password , profile_img }) => {
    return async function (dispatch) {
      try {
        let res = await axios({
          method: "POST",
          data: { username, email, password,profile_img  },
          url: `${url}/api/auth/login`,
        });
        dispatch(responseLogin(res.data));
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-right",
          duration: 4000,
  
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    };
  };
  

  export const createUser = ({username, email, password , profile_img }) => {
    return async function (dispatch) {
      try {
        let res = await axios({
          method: "POST",
          data: { username, email, password,profile_img  },
          url: `${url}/api/auth/register`,
        });
        dispatch(responseRegister(res.data));
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-right",
          duration: 4000,
  
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    };
  };


  export const GetConvCurrentUser  = () => {
    return async function (dispatch) {
      try {
        const Id = localStorage.getItem('id')
        let {data}= await axios({
          method: "GET",
          url: `${url}/api/conversations/${Id}`,
        });
        dispatch(responseConversations(data));
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-right",
          duration: 4000,
  
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    };
  };
  
  
// const GetConvCurrentUser = () => {

// }
  //post create conversation
  // get conv de un ususario (params)
  // get conv ambos
  // get conv


