import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import { RenderContext } from "../../contexts/RenderHeader";

import "./Header.css";

export default function Header() {
  const { token, setToken } = useContext(TokenContext);
  const { renderHeader, setRenderHeader } = useContext(RenderContext);
  
  console.log(token);

  return (
    <header id="header" className={`${renderHeader ? null : "remove-header"}`}>
      <div className="logo-container">
        <Link to="/">
          <h1>Upsilon</h1>
        </Link>
      </div>
      <div className="searchbar-container">
        <form>
          <div className="category-selector-container">
            <select name="category" title="Search in">
              <option defaultValue="search-category-all">All</option>
              <option value="search-category-electronics">Electronics</option>
              <option value="search-category-jewelery">Jewelery</option>
              <option value="search-category-men's-clothing">
                Men's clothing
              </option>
              <option value="search-category-women's-clothing">
                Women's clothing
              </option>
            </select>
          </div>
          <div className="search-input-container">
            <input type="search" placeholder="Search" />
          </div>
          <div className="serarch-icon-container">
            <button type="submit">
              <i className="material-symbols-outlined">search</i>
            </button>
          </div>
        </form>
      </div>
      <div className="account-container">
        {token ? (
          <Link to="/account">
            <p>Account</p>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <p>Login</p>
            </Link>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </>
        )}
      </div>
      <div className="shopping-cart-container">
        <Link to="/cart">
          <i className="material-symbols-outlined">shopping_cart</i>
        </Link>
      </div>
    </header>
  );
}
