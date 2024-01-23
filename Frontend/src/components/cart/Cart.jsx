import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { RenderContext } from "../../contexts/RenderHeader";

import "./Cart.css";

export default function Cart({ userCart, setUserCart }) {
  const [number, setNumber] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [disableButton, setDisablebutton] = useState(true);

  const { setRenderHeader } = useContext(RenderContext);

  const navigate = useNavigate();

  function handleOnClick(id) {
    setUserCart(JSON.parse(localStorage.getItem("cart")));

    //This will remove the object that corresponds with the supplied id.
    let tempArr = userCart.reduce((p, c) => (c.id !== id && p.push(c), p), []);
    setUserCart(tempArr);
    localStorage.setItem("cart", JSON.stringify(tempArr));
    setNumber(number + 1);
  }

  //Set up a price subtotal cal here
  useEffect(() => {
    setRenderHeader(true);
    setUserCart(JSON.parse(localStorage.getItem("cart")));

    async function doPrices() {
      let tempPrice = 0;

      const cart = JSON.parse(localStorage.getItem("cart"));

      async function doSubTotal() {
        if (cart.length < 1) {
          setSubTotalPrice(0);
          console.log("if Ran");
        }
        for (let index = 0; index < cart.length; index++) {
          const element = cart[index];
          tempPrice = tempPrice + element.price;
          setSubTotalPrice(tempPrice);
        }
      }
      await doSubTotal();
    }
    doPrices();
    console.log(userCart);

    if (userCart.length >= 1) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [number]);

  return (
    <main className="cart-main">
      <section className="left-section">
        <div className="cart-products-list-container">
          {userCart.length ? (
            userCart.map((product) => {
              return (
                <div key={product.id} className="cart-product-container">
                  <section className="image-section">
                    <div className="cart-product-image-container">
                      <img
                        src={product.image}
                        alt={`A image of ${product.title}.`}
                        width="100px"
                      />
                    </div>
                  </section>
                  <section className="item-stuff-section">
                    <div className="cart-product-title-container">
                      <p>{product.title}</p>
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
            <p className="empty-cart">There's nothing here.</p>
          )}
        </div>
      </section>
      <section className="right-section">
        <div className="total-container">
          <div className="cart-subtotal-container">
            <section className="cart-subtotal-container-sec-l">
              <p>Subtotal:</p>
            </section>
            <section className="cart-subtotal-container-sec-r">
              <p>{`$${subTotalPrice}`}</p>
            </section>
          </div>
          <div className="timeframe-container">
            <section className="timeframe-container-sec-l">
              <p>Estimated shipping time:</p>
            </section>
            <section className="timeframe-container-sec-r">
              <p>2-4 Days</p>
            </section>
          </div>
          <div className="cart-button-container">
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              disabled={disableButton ? true : false}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
