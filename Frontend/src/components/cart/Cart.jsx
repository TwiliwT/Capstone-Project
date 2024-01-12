import { useEffect, useState } from "react";

export default function Cart({ userCart, setUserCart }) {
  const [number, setNumber] = useState(0);

  function handleOnClick(id) {
    setUserCart(JSON.parse(localStorage.getItem("cart")));

    //This will remove the object that corresponds with the supplied id.
    let tempArr = userCart.reduce((p, c) => (c.id !== id && p.push(c), p), []);
    setUserCart(tempArr);
    localStorage.setItem("cart", JSON.stringify(tempArr));
  }

  return (
    <main>
      <div className="cart-products-list-container">
        {userCart.length ? (
          userCart.map((product) => {
            return (
              <div className="cart-products-list">
                <div key={product.id} className="cart-product-container">
                  <div className="cart-product-image-container">
                    <img
                      src={product.image}
                      alt={`A image of ${product.title}.`}
                      width="100px"
                    />
                  </div>
                  <div className="cart-product-title-container">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="cart-product-price-container">
                    <p>{product.price}</p>
                  </div>
                  <div className="cart-product-delete-button-container">
                    <button
                      onClick={() => {
                        handleOnClick(product.id);
                        setNumber(number + 1);
                      }}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}
