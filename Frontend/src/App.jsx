import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckoutPage from "./pages/CheckoutPage";

import TokenContextProvider from "./contexts/TokenContext";

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
    <TokenContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              setUserCart={setUserCart}
            />
          }
        />
        <Route
          path="/Product/:id"
          element={<SingleProductPage setUserCart={setUserCart} />}
        />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route
          path="/Cart"
          element={<CartPage userCart={userCart} setUserCart={setUserCart} />}
        />
        <Route
          path="/Checkout"
          element={<CheckoutPage setUserCart={setUserCart} />}
        />
      </Routes>
    </TokenContextProvider>
  );
}

export default App;
