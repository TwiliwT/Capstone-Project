import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import ListItems from "./components/ListItems/ListItems";

import TokenContextProvider from "./contexts/TokenContext";
import RenderContextProvider from "./contexts/RenderHeader";

import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState({})

  return (
    <RenderContextProvider>
      <TokenContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListItems allProducts={allProducts} setAllProducts={setAllProducts} />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </TokenContextProvider>
    </RenderContextProvider>
  );
}

export default App;
