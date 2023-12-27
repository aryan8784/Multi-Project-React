import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContextProvider";
import { Navigate } from "react-router-dom";
import { AppContextWithReducer } from "../../Context/AppContextWithReducer";

const PrivateRoute = ({ children }) => {
  // need Auth State
  // or ye Auth state context Api se mily gi
  const [state, dispatch] = useContext(AppContextWithReducer);

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
