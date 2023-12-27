import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleCartCard from "../Components/Cart/SingleCartCard";
import { useContext } from "react";
import { AppContextWithReducer } from "../Context/AppContextWithReducer";
import { CART_DATA_SAVED } from "../Reducer/actions";
import style from "../styles/Cart.module.css";
import { handleTotalAmount } from "../Reducer/actionCreator";

const Cart = () => {
  const [state, dispatch] = useContext(AppContextWithReducer);

  useEffect(() => {
    dispatch({ type: "CART_LOADING_START" });
    axios
      .get("http://localhost:3000/carts")
      .then((res) => {
        dispatch({ type: CART_DATA_SAVED, payload: res.data });
        handleTotalAmount(res.data, dispatch);
      })
      .catch((err) => {
        dispatch({ type: "CART_ERROR" });
      });
  }, []);

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

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>THIS IS CART PAGE</h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Total Cart Amount : {state.totalCartAmount}</h3>
      </div>

      <div className={style.main_div}>
        {state.cart?.map((ele) => (
          <SingleCartCard key={ele.id} {...ele} />
        ))}
      </div>
    </>
  );
};

export default Cart;
