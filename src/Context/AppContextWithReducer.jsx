import { Children, createContext, useReducer } from "react";
import reducer from "../Reducer/reducer";
import store from "../Reducer/store";

export const AppContextWithReducer = createContext();

export const AppContextWithReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <AppContextWithReducer.Provider value={[state, dispatch]}>
      {children}
    </AppContextWithReducer.Provider>
  );
};
