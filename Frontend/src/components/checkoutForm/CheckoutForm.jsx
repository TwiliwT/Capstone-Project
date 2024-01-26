import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CheckoutForm.css";

export default function CheckoutForm({ setUserCart }) {
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  function handleOnClick() {
    localStorage.setItem("cart", JSON.stringify([]));
    setUserCart([]);
    navigate("/");
  }

  useEffect(() => {
    async function doPrices() {
      let tempPrice = 0;
      let tempTotalPrice = 0;

      const cart = JSON.parse(localStorage.getItem("cart"));

      async function doSubTotal() {
        for (let index = 0; index < cart.length; index++) {
          const element = cart[index];
          tempPrice = tempPrice + element.price;
          setSubTotalPrice(tempPrice);
        }
      }
      await doSubTotal();

      setTax(tempPrice * 0.0825);

      async function doTotalPrice() {
        tempTotalPrice = tempPrice + tax;
        tempTotalPrice = Number(tempTotalPrice.toFixed(2));
        return tempTotalPrice;
      }

      setTotalPrice(await doTotalPrice());
    }
    doPrices();
  });

  return (
    <main className="checkout-form-main">
      <div className="checkout-logo">
        <Link to="/">
          <h1 className="logo-login">Upsilon</h1>
        </Link>
      </div>
      <section className="checkout-main-section">
        <section className="checkout-form-container">
          <form className="checkout-form">
            <section className="ccn-form-section">
              <input
                id="ccn"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength={19}
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            </section>
            <section className="checkout-form-ccv-options">
              <section className="checkout-form-options">
                <select name="month" required>
                  <option value="january">01</option>
                  <option value="febuary">02</option>
                  <option value="march">03</option>
                  <option value="april">04</option>
                  <option value="may">05</option>
                  <option value="june">06</option>
                  <option value="july">07</option>
                  <option value="august">08</option>
                  <option value="september">09</option>
                  <option value="october">10</option>
                  <option value="november">11</option>
                  <option value="december">12</option>
                </select>
                <select name="year" required>
                  <option value="2024">24</option>
                  <option value="2025">25</option>
                  <option value="2026">26</option>
                  <option value="2027">27</option>
                  <option value="2028">28</option>
                  <option value="2029">29</option>
                  <option value="2030">30</option>
                  <option value="2031">31</option>
                  <option value="2032">32</option>
                  <option value="2033">33</option>
                  <option value="2034">34</option>
                </select>
              </section>
              <section className="ccv-form-section">
                <input
                  id="cvv-number "
                  type="tel"
                  inputMode="numeric"
                  autoComplete="cvv-number"
                  maxLength={3}
                  placeholder="xxx"
                  required
                />
              </section>
              <section>
                <p className="disclaimer">
                  Disclaimer: None of this information <br />
                  will be saved or sent anywhere, Regardless
                  <br /> please do not enter any of your actual
                  <br /> information.
                </p>
              </section>
            </section>
          </form>
        </section>
        <section className="total-price-section">
          <div className="total-price-container">
            <section className="order-summary-section">
              <h2>Order Summary</h2>
            </section>
            <section className="prices-section">
              <section className="prices-section-l">
                <p>Items total</p>
                <p>Shipping</p>
                <p>Estimated Tax</p>
              </section>
              <section className="prices-section-r">
                <p>{`$${subTotalPrice}`}</p>
                <p>$0.00</p>
                <p>{`$${(Math.round(tax * 100) / 100).toFixed(2)}`}</p>
              </section>
            </section>
            <section className="order-total-section">
              <section className="order-total-section-l">
                <h2>Order Total:</h2>
              </section>
              <section className="order-total-section-r">
                <h2>{`$${totalPrice}`}</h2>
              </section>
            </section>
            <section className="checkout-button-section">
              <button onClick={handleOnClick}>Checkout</button>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
