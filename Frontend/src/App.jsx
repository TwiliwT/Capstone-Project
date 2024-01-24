import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import ListItems from "./components/listitems/ListItems";
import SingleProduct from "./components/singleitem/SingleProduct";
import Cart from "./components/cart/Cart";
import CheckoutForm from "./components/checkoutForm/CheckoutForm";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import TokenContextProvider from "./contexts/TokenContext";
import RenderContextProvider from "./contexts/RenderHeader";

import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState(null);
  const [userCart, setUserCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  useEffect(() => {
    async function checkCart() {
      let tempcart = JSON.parse(localStorage.getItem("cart"));

      async function firstCheck() {
        if (tempcart == null) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
      }

      async function secondCheck() {
        if (tempcart.length >= 1) {
          setUserCart(JSON.parse(localStorage.getItem("cart")));
          return;
        } else {
          localStorage.setItem("cart", JSON.stringify([]));
          return;
        }
      }
      await firstCheck();
      await secondCheck();
    }
    checkCart();
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
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route
            path="/Cart"
            element={<Cart userCart={userCart} setUserCart={setUserCart} />}
          />
          <Route
            path="/Checkout"
            element={
              <CheckoutForm setUserCart={setUserCart} userCart={userCart} />
            }
          />
        </Routes>
      </TokenContextProvider>
    </RenderContextProvider>
  );
}

export default App;
