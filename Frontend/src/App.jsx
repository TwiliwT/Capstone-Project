import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ListItems from "./components/listitems/ListItems";
import SingleProduct from "./components/singleitem/SingleProduct";
import Cart from "./components/cart/Cart";

import TokenContextProvider from "./contexts/TokenContext";
import RenderContextProvider from "./contexts/RenderHeader";

import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [userCart, setUserCart] = useState([]);


  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      return;
    } else {
      localStorage.setItem("cart", JSON.stringify([]))
    }
  }, []);

  return (
    <RenderContextProvider>
      <TokenContextProvider>
        <Header setUserCart={setUserCart} />
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
            path="/Product/:id"
            element={
              <SingleProduct userCart={userCart} setUserCart={setUserCart} />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Cart"
            element={<Cart userCart={userCart} setUserCart={setUserCart} />}
          />
        </Routes>
      </TokenContextProvider>
    </RenderContextProvider>
  );
}

export default App;
