import Header from "../components/header/Header";
import SingleProduct from "../components/singleproduct/SingleProduct";

export default function SingleProductPage({
  setUserCart,
  allProducts,
  setFilterdAllProducts,
}) {
  return (
    <>
      <Header
        setUserCart={setUserCart}
        allProducts={allProducts}
        setFilterdAllProducts={setFilterdAllProducts}
      />
      <SingleProduct setUserCart={setUserCart} />
    </>
  );
}
