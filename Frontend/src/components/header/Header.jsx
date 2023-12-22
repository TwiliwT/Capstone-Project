import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1>Upsilon</h1>
      </div>
      <div className="searchbar-container">
        <form>
          <div>
            <select name="category" title="Search in">
              <option selected="selected" value="search-category-all">
                All
              </option>
            </select>
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <i className="material-symbols-outlined">search</i>
          </div>
        </form>
      </div>
      <div className="account-container">
        <div>
          <p>Account</p>
        </div>
      </div>
      <div className="shopping-cart-container">
        <i className="material-symbols-outlined">shopping_cart</i>
      </div>
    </header>
  );
}
