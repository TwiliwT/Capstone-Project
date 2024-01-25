import Header from "../components/header/Header";
import SubHeader from "../components/subheader/SubHeader";
import ListItems from "../components/listitems/ListItems";

export default function HomePage({
  allProducts,
  setAllProducts,
  setUserCart,
  setFilterdAllProducts,
  filterdAllProducts,
}) {
  return (
    <>
      <Header setUserCart={setUserCart} />
      <SubHeader
        setFilterdAllProducts={setFilterdAllProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        filterdAllProducts={filterdAllProducts}
      />
      <ListItems allProducts={allProducts} setAllProducts={setAllProducts} filterdAllProducts={filterdAllProducts} />
    </>
  );
}
