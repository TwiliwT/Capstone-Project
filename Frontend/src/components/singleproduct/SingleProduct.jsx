import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "../../API";

import "./SingleProduct.css";

export default function SingleProduct({ setUserCart }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  //This is really not a good way to do a users cart but i really did not like the way it was done on the API.
  //So i set this up to emulate it.
  async function onSubmitHandler(id) {
    const found = JSON.parse(localStorage.getItem("cart")).find(
      (product) => product.id === id
    );

    if (found) {
      setError("You can only add 1 of each item to your cart.");
    } else {
      const cartInLS = JSON.parse(localStorage.getItem("cart"));
      cartInLS.push(product);
      localStorage.setItem("cart", JSON.stringify(cartInLS));
      setUserCart(cartInLS);
    }
  }

  useEffect(() => {
    async function fetchSingleProduct() {
      setProduct(await getSingleProduct(id));
    }
    fetchSingleProduct();
  }, []);

  return (
    <>
      {product && (
        <main className="single-product-main-container">
          <div className="single-product-left-container">
            <section className="single-product-image-section">
              <img src={product.image} alt={`An image of ${product.name}.`} />
            </section>
          </div>
          <div className="single-product-right-container">
            <div className="single-product-info-container">
              <section className="single-product-info-section">
                <div className="single-product-title-container">
                  <h2>{product.title}</h2>
                </div>
                <div className="single-product-category-container">
                  <p>{`In ${product.category}`}</p>
                </div>
                <div className="single-product-rating-container">
                  <p>{`${product.rating.count} ratings`}</p>
                  <p>{`Rating: ${product.rating.rate}`}</p>
                </div>
                <div className="single-product-descrpition-container">
                  <p>{product.description}</p>
                </div>
                <div>
                  <b>{`Price: $${product.price}`}</b>
                </div>
              </section>
            </div>
            <div className="single-product-buy-container">
              <section className="single-product-buy-section">
                <div className="single-product-buy-section-price">
                  <b>{`Price: $${product.price}`}</b>
                </div>
                <div className="single-product-button-container">
                  <button
                    onClick={() => {
                      onSubmitHandler(product.id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
                <div>
                  {error && (
                    <p className="single-product-error-message">{error}</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
