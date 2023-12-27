// reducer is function

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

const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_ON_CHANGE:
      const { type, value } = action.payload;
      return { ...state, [type]: value };

    case CALCULATOR_ONCLICK:
      const { resYearExpToday, resYearExpRet, resFireNumber } = action.payload;
      return { ...state, resYearExpToday, resYearExpRet, resFireNumber };

    case LOGIN_REQUEST:
      return { ...state, isloading: true }; //we need to show loding

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isloading: false,
        isError: false,
        token: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        isloading: false,
        isError: true,
        token: null,
      };

    case LOGOUT_REQUEST:
      return { ...state, isAuth: false, token: null };

    case CART_DATA_SAVED:
      return { ...state, cart: action.payload, isloading: false };

    case "CART_LOADING_START":
      return { ...state, isloading: true };

    case "CART_ERROR":
      return { ...state, cart: null, isloading: false, isError: true };

    case CART_TOTAL_AMOUNT:
      return { ...state, totalCartAmount: action.payload };

    default:
      return state;
  }
};

export default reducer;
