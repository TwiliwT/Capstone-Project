import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";

import { TokenContext } from "../contexts/TokenContext";

export default function CartPage({ userCart, setUserCart }) {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  useEffect(() => {
    //This checks if there is a token and if there is not it will redirect you to the login page
    if (!token) {
      navigate("/Login");
    }
  }, []);

  return (
    <>
      <Header setUserCart={setUserCart} />
      {token && <Cart userCart={userCart} setUserCart={setUserCart} />}
    </>
  );
}
