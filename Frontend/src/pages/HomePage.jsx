import Header from "../components/header/Header";
import ListItems from "../components/listitems/ListItems";

export default function HomePage({ allProducts, setAllProducts, setUserCart }) {
  return (
    <>
      <Header setUserCart={setUserCart} />
      <ListItems allProducts={allProducts} setAllProducts={setAllProducts} />
    </>
  );
}
