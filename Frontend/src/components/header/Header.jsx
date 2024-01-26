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
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  function searchHandler(e) {
    setSearchInput(e.target.value);
    const value = e.target.value;
    const products = allProducts;
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filter.toLowerCase() == "all") {
      setFilterdAllProducts(filtered);
    } else {
      const evenMoreFilterd = filtered.filter((product) =>
        product.category.toLowerCase().includes(filter.toLowerCase())
      );
      setFilterdAllProducts(evenMoreFilterd);
    }
  }

  function filterHandler(e) {
    setFilter(e.target.value);
  }

  function logoutHandler() {
    if (
      confirm(
        "Warning: When you logout your account will be DELETED. Are you sure you wish to continue?"
      )
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("cart");
      setToken(null);
      setUserCart([]);
      navigate("/");
      window.location.reload();
    } else {
      return;
    }
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
            <select name="category" title="Search in" onChange={filterHandler}>
              <option defaultValue="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's-clothing">Men's clothing</option>
              <option value="women's-clothing">Women's clothing</option>
            </select>
          </div>
          <div className="search-input-container">
            <input type="text" placeholder="Search" onChange={searchHandler} />
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
