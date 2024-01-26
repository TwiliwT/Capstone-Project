import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";

import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      username: username,
    };
    setToken("dwaf3g24r789yrfhwnefu!");
    localStorage.setItem("username", JSON.stringify(userObj));
    localStorage.setItem("token", "dwaf3g24r789yrfhwnefu!");

    navigate("/");
  }

  return (
    <main className="main-register">
      <div className="logo-container-register">
        <Link to="/">
          <h1 className="logo-login">Upsilon</h1>
        </Link>
      </div>
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <section className="username-section-register">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              required
              id="username"
            />
          </section>
          <section className="email-section-register">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
              id="email"
            />
          </section>
          <section className="phone-section-register">
            <label htmlFor="phonenumber">PhoneNumber</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              required
              id="phonenumber"
            />
          </section>
          <section className="password-section-register">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
              id="password"
            />
          </section>
          <section className="register-button-section">
            <button type="submit">Register</button>
          </section>
          <section className="to-login">
            <Link to="/Login">
              <p>Alread have an account? Login here.</p>
            </Link>
          </section>
          <section>
            <p>
              Disclaimer: None of this information <br />
              will be saved, Regardless please do not <br />
              enter any of your actual information.
            </p>
          </section>
        </form>
      </div>
    </main>
  );
}
