import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TokenContextProvider from "./contexts/TokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TokenContextProvider>
  </React.StrictMode>
);
