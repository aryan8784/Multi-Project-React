import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import { AppContext } from "../../Context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { AppContextWithReducer } from "../../Context/AppContextWithReducer";
import {
  handleInputOnChange,
  handleLoginRequest,
  handleLogoutRequest,
} from "../../Reducer/actionCreator";

const Login = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(AppContextWithReducer);

  if (state.isloading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src="https://i.gifer.com/origin/34/3459e0e117b5d35a51aef0cf1e443831_w200.webp"
          alt=""
        />
      </div>
    );
  }

  if (state.isAuth) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>Token --- {state.token}</h1>
        <br />
        <br />
        <button
          style={{ padding: "10px" }}
          onClick={() => dispatch(handleLogoutRequest())}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <h1>Login App</h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Email"
          value={state.email}
          onChange={(e) =>
            dispatch(handleInputOnChange("email", e.target.value))
          }
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={state.password}
          onChange={(e) =>
            dispatch(handleInputOnChange("password", e.target.value))
          }
        />
        <br />
        <br />
        <button
          style={{ padding: "10px" }}
          onClick={() => handleLoginRequest(dispatch, state)}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
