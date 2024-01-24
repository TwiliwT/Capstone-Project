import Header from "../components/header/Header";
import SingleProduct from "../components/singleproduct/SingleProduct";

export default function SingleProductPage({ setUserCart }) {
  return (
    <>
      <Header setUserCart={setUserCart} />
      <SingleProduct setUserCart={setUserCart} />
    </>
  );
}
