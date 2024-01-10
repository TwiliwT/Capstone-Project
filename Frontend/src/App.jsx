import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import ListItems from "./components/listitems/ListItems";
import SingleProduct from "./components/singleitem/SingleProduct";
import Cart from "./components/cart/Cart";

import TokenContextProvider from "./contexts/TokenContext";
import RenderContextProvider from "./contexts/RenderHeader";

import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [userCart, setUserCart] = useState([]);

  return (
    <RenderContextProvider>
      <TokenContextProvider>
        <Header setUserCart={setUserCart}/>
        <Routes>
          <Route
            path="/"
            element={
              <ListItems
                allProducts={allProducts}
                setAllProducts={setAllProducts}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct userCart={userCart} setUserCart={setUserCart} />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/cart" element={<Cart userCart={userCart} setUserCart={setUserCart}/>} />
        </Routes>
      </TokenContextProvider>
    </RenderContextProvider>
  );
}

export default App;
