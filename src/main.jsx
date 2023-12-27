import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextWithReducerProvider } from "./Context/AppContextWithReducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextWithReducerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextWithReducerProvider>
  </React.StrictMode>
);
