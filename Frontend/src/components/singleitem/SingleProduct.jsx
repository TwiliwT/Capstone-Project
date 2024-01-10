import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../API";

import "./SingleProduct.css";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      setProduct(await getSingleProduct(id));
      console.log(product);
    }
    fetchSingleProduct();
  }, []);

  return (
    <>
      {product && (
        <main className="single-product-main-container">
          <section className="single-product-image-section">
            <img src={product.image} alt={`An image of ${product.name}.`} />
          </section>
          <section className="single-product-info-section">
            <div className="single-product-title-container">
              <h2>{product.title}</h2>
            </div>
            <div className="single-product-rating-container">
              <p>{product.rating.rate}</p>
              <p>{`${product.rating.count} ratings`}</p>
            </div>
            <div className="single-product-category-container">
              <p>{`In ${product.category}`}</p>
            </div>
            <div className="single-product-descrpition-container">
              <p>{product.description}</p>
            </div>
          </section>
          <section className="single-product-buy-container">
            <div>
              <p>{`Price: $${product.price}`}</p>
            </div>
            <div>
              <button>Add to cart</button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
