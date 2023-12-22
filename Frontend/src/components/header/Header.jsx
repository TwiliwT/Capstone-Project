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
          <div className="category-selector-container">
            <select name="category" title="Search in">
              <option selected="selected" value="search-category-all">
                All
              </option>
              <option value="search-category-test">This is a test</option>
            </select>
          </div>
          <div className="search-input-container">
            <input type="text" />
          </div>
          <div className="serarch-icon-container">
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
