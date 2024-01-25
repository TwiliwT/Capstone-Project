import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";

import "./Header.css";

export default function Header({
  setUserCart,
  allProducts,
  setFilterdAllProducts,
}) {
  const { token, setToken } = useContext(TokenContext);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function searchHandler(e) {
    setSearchInput(e.target.value);
    const value = e.target.value;
    const products = allProducts;
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilterdAllProducts(filtered);
  }

  function logoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    setToken(null);
    setUserCart([]);
    navigate("/");
    window.location.reload();
  }

  return (
    <header id="header" className="main-header">
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
            <input
              type="text"
              placeholder="Search"
              onChange={searchHandler}
              
            />
          </div>
          <div className="serarch-icon-container">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <i className="material-symbols-outlined">search</i>
            </button>
          </div>
        </form>
      </div>
      <div className="account-container">
        {token ? (
          <>
            <button onClick={logoutHandler}>Logout</button>
          </>
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
