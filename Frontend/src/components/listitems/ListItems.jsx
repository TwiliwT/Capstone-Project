import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../API";

import "./ListItems.css";

export default function ListItems({ allProducts, setAllProducts }) {
  useEffect(() => {
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
                <div className="item-image-container">
                  <img src={item.image} />
                </div>

                <div>
                  <Link to={`/product/${item.id}`}>
                    <b>{item.title}</b>
                  </Link>
                </div>
                <div className="item-price-container">
                  <p className="item-price">{`$${item.price}`}</p>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
