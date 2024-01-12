import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RenderContext } from "../../contexts/RenderHeader";
import { getAllProducts } from "../../API";

import "./ListItems.css";

export default function ListItems({ allProducts, setAllProducts }) {
  const { renderHeader, setRenderHeader } = useContext(RenderContext);

  useEffect(() => {
    setRenderHeader(true);

    async function fetchAllProducts() {
      await setAllProducts(await getAllProducts());
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
                <img src={item.image} />
                <p>
                  <Link to={`/product/${item.id}`}>
                    <b>{item.title}</b>
                  </Link>
                </p>
                <p>{item.price}</p>
                <p>{item.descripotion}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
