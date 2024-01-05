import { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div>
        <Link to="/">
          <h1 className="logo-login">Upsilon</h1>
        </Link>
      </div>
      <div className="login-form-container">
        <form>
          <section className="name-section">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
          </section>
          <section className="username-section">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </section>
          <section className="email-section">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </section>
          <section className="password-section">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </section>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
