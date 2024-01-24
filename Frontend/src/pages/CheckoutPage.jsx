import CheckoutForm from "../components/checkoutForm/CheckoutForm";

export default function CheckoutPage({ setUserCart }) {
  return (
    <>
      <CheckoutForm setUserCart={setUserCart} />
    </>
  );
}
