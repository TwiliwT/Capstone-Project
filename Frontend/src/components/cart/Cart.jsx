import { useEffect, useState } from "react";

import "./Cart.css";

export default function Cart({ userCart, setUserCart }) {
  const [number, setNumber] = useState(0);

  function handleOnClick(id) {
    setUserCart(JSON.parse(localStorage.getItem("cart")));

    //This will remove the object that corresponds with the supplied id.
    let tempArr = userCart.reduce((p, c) => (c.id !== id && p.push(c), p), []);
    setUserCart(tempArr);
    localStorage.setItem("cart", JSON.stringify(tempArr));
  }


  //Set up a price subtotal cal here
  useEffect(()=>{
    

  },[])

  return (
    <main>
      <div className="cart-products-list-container">
        {userCart.length ? (
          userCart.map((product) => {
            return (
              <div key={product.id} className="cart-product-container">
                <section>
                  <div className="cart-product-image-container">
                    <img
                      src={product.image}
                      alt={`A image of ${product.title}.`}
                      width="100px"
                    />
                  </div>
                </section>
                <section>
                  <div className="cart-product-title-container">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="cart-product-price-container">
                    <p>{`$${product.price}`}</p>
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
                </section>
              </div>
            );
          })
        ) : (
          <p>Nothing Here</p>
        )}
      </div>
      <div className="total-container">
        <div><p>{`Subtotal: `}</p></div>
      </div>
    </main>
  );
}
