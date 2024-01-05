import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import TokenContextProvider from "./contexts/TokenContext";
import RenderContextProvider from "./contexts/RenderHeader";
import Header from "./components/header/Header";

import "./App.css";
import Login from "./components/login/Login";

function App() {
  return (
    <RenderContextProvider>
      <TokenContextProvider>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </TokenContextProvider>
    </RenderContextProvider>
  );
}

export default App;
