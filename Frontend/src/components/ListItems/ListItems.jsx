import { useContext, useEffect, useState } from "react";
import { RenderContext } from "../../contexts/RenderHeader";
import { getAllProducts } from "../../API";

export default function ListItems({ allProducts, setAllProducts }) {
  const { renderHeader, setRenderHeader } = useContext(RenderContext);

  useEffect(() => {
    setRenderHeader(true);

    async function fetchAllProducts() {
      await setAllProducts(await getAllProducts());
      console.log(allProducts);
    }
    fetchAllProducts();
  }, []);

  return (
    <main>
      <div>
        {allProducts &&
          allProducts.map((item) => {
            return (
              <div>
                <p>{item.title}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
