import { createContext, useState } from "react";

// Crete the context
export const AppContext = createContext();

// p]Provide the context

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    setAuth(true);
    setToken(token)
  };

  const logout = () => {
    setAuth(false);
    setToken("");
  };

  return (
    <AppContext.Provider value={{ auth, token,login,logout }}>
      {children}
    </AppContext.Provider>
  );
};
