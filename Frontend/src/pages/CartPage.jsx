import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";

export default function CartPage({ userCart, setUserCart }) {
  return (
    <>
      <Header setUserCart={setUserCart} />
      <Cart userCart={userCart} setUserCart={setUserCart} />
    </>
  );
}
