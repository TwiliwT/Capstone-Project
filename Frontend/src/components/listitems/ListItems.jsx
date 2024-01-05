import { useContext, useEffect, useState } from "react";
import { RenderContext } from "../../contexts/RenderHeader";
import { getAllProducts } from "../../API";

import "./ListItems.css"

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
      <div className="item-list-container">
        {allProducts &&
          allProducts.map((item) => {
            return (
              <div className="item-container" key={item.id}>
                <img src={item.image}/>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.descripotion}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
