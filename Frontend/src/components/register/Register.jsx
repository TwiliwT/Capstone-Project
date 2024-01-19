import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import { RenderContext } from "../../contexts/RenderHeader";
// import { registerUser } from "../../API";

import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const { token, setToken } = useContext(TokenContext);
  const { setRenderHeader } = useContext(RenderContext);

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

  useEffect(() => {
    setRenderHeader(false);
  }, []);

  return (
    <main>
      <div>
        <Link to="/">
          <h1 className="logo-login">Upsilon</h1>
        </Link>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <section className="username-section">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              id="username"
            />
          </section>
          <section className="email-section">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              id="email"
            />
          </section>
          <section>
            <label htmlFor="phonenumber">PhoneNumber</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              id="phonenumber"
            />
          </section>
          <section className="password-section">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              id="password"
            />
          </section>
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
