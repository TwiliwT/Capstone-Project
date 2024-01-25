import { useState } from "react";

import "./SubHeader.css";

export default function SubHeader({ setFilterdAllProducts, allProducts }) {
  const [currentFilter, setCurrentFilter] = useState("All");

  function onClickHandler(value) {
    const products = allProducts;

    setCurrentFilter(value);

    if (value === "All") {
      setFilterdAllProducts([]);
    } else if (value === "Electronics") {
      setFilterdAllProducts(
        products.filter((product) => product.category.includes("electronics"))
      );
    } else if (value === "Jewelery") {
      setFilterdAllProducts(
        products.filter((product) => product.category.includes("jewelery"))
      );
    } else if (value === "Men's Clothing") {
      setFilterdAllProducts(
        products.filter((product) =>
          product.category.includes("men's clothing")
        )
      );
    } else if (value === "Women's Clothing") {
      setFilterdAllProducts(
        products.filter((product) =>
          product.category.includes("women's clothing")
        )
      );
    }
  }

  return (
    <header className="subheader">
      <div className="subheader-container">
        <div>
          <p
            onClick={(e) => {
              onClickHandler(e.target.innerHTML);
            }}
          >
            All
          </p>
        </div>
        <div>
          <p
            onClick={(e) => {
              onClickHandler(e.target.innerHTML);
            }}
          >
            Electronics
          </p>
        </div>
        <div>
          <p
            onClick={(e) => {
              onClickHandler(e.target.innerHTML);
            }}
          >
            Jewelery
          </p>
        </div>
        <div>
          <p
            onClick={(e) => {
              onClickHandler(e.target.innerHTML);
            }}
          >
            Men's Clothing
          </p>
        </div>
        <div>
          <p
            onClick={(e) => {
              onClickHandler(e.target.innerHTML);
            }}
          >
            Women's Clothing
          </p>
        </div>
        <div className="current-filter">
          <p>{`Current Filter: ${currentFilter}`}</p>
        </div>
      </div>
    </header>
  );
}
