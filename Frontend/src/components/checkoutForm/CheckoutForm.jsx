import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RenderContext } from "../../contexts/RenderHeader";

import "./CheckoutForm.css";

export default function CheckoutForm() {
  const { renderHeader, setRenderHeader } = useContext(RenderContext);

  useEffect(() => {
    setRenderHeader(false);
  }, []);

  return (
    <main className="checkout-form-main">
      <section>
        <div className="checkout-logo">
          <Link to="/">
            <h1 className="logo-login">Upsilon</h1>
          </Link>
        </div>
      </section>
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
                <select name="year" pattern="[0-9\s]{4}" required>
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
                <p>Items</p>
                <p>Shipping</p>
                <p>Estimated Tax</p>
              </section>
              <section className="prices-section-r">
                <p>$ITEM PRICE</p>
                <p>$0.00</p>
                <p>$TAX</p>
              </section>
            </section>
            <section className="order-total-section">
              <section className="order-total-section-l">
                <h2>Order Total:</h2>
              </section>
              <section className="order-total-section-r">
                <h2>$2222</h2>
              </section>
            </section>
            <section className="checkout-button-section">
              <button>Checkout</button>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
