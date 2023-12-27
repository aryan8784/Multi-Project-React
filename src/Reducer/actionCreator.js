// ye wo function he jo input ko call kr data input ka de ga callback function

import axios from "axios";
import {
  CALCULATOR_ONCLICK,
  CART_DATA_SAVED,
  CART_TOTAL_AMOUNT,
  INPUT_ON_CHANGE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
} from "./actions";

const handleInputOnChange = (type, value) => {
  return {
    type: INPUT_ON_CHANGE,
    payload: {
      type,
      value,
    },
  };
};

const handleCalculatorOnclick = (state) => {
  const { expToday, curAge, retAge, infliation } = state;

  // formula year expense as a today(month * 12)

  let resYearExpToday = (Number(expToday) * 12).toFixed(0);
  // future Value = present value * (1 + rate / 100) ** (retirement age - current age)
  const ageDiffernce = Number(retAge) - Number(curAge);
  let resYearExpRet = (
    resYearExpToday *
    (1 + Number(infliation) / 100) ** ageDiffernce
  ).toFixed(0);
  //
  let resFireNumber = (resYearExpRet * 25).toFixed(0);

  resYearExpToday = resYearExpToday.toString();
  resYearExpRet = resYearExpRet.toString();
  resFireNumber = resFireNumber.toString();

  return {
    type: CALCULATOR_ONCLICK,
    payload: { resYearExpToday, resYearExpRet, resFireNumber },
  };
};

const handleLoginRequest = (dispatch, state) => {
  dispatch({ type: LOGIN_REQUEST });

  const payload = {
    email: state.email,
    password: state.password,
  };

  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

const handleLogoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const handleQuantity = (id, price, quantity, type, dispatch) => {
  axios
    .patch(`http://localhost:3000/carts/${id}`, {
      quantity: type === "+" ? quantity + 1 : quantity - 1,
      total: type === "+" ? price * (quantity + 1) : price * (quantity - 1),
    })
    .then((res) => {
      axios.get(`http://localhost:3000/carts`).then((res) => {
        dispatch({ type: CART_DATA_SAVED, payload: res.data });
        handleTotalAmount(res.data, dispatch);
      });
    })
    .catch((err) => {});
};

const handleRemove = (id, dispatch) => {
  axios
    .delete(`http://localhost:3000/carts/${id}`)
    .then((res) => {
      axios.get(`http://localhost:3000/carts`).then((res) => {
        dispatch({ type: CART_DATA_SAVED, payload: res.data });
        handleTotalAmount(res.data, dispatch);
      });
    })
    .catch((err) => {});
};

const handleTotalAmount = (data, dispatch) => {
  let totalPrice = 0;
  data?.map((ele) => {
    totalPrice = totalPrice + ele.price * ele.quantity;
  });
  dispatch({ type: CART_TOTAL_AMOUNT, payload: totalPrice });
};

export {
  handleInputOnChange,
  handleCalculatorOnclick,
  handleLoginRequest,
  handleLogoutRequest,
  handleQuantity,
  handleRemove,
  handleTotalAmount,
};
