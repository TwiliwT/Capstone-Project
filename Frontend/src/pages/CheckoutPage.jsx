import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CheckoutForm from "../components/checkoutForm/CheckoutForm";

import { TokenContext } from "../contexts/TokenContext";

export default function CheckoutPage({ setUserCart }) {
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
      <CheckoutForm setUserCart={setUserCart} />
    </>
  );
}
