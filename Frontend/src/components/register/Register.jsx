import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import { RenderContext } from "../../contexts/RenderHeader";
import { registerUser } from "../../API";

import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const { token, setToken } = useContext(TokenContext);
  const { renderHeader, setRenderHeader } = useContext(RenderContext);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      email: email,
      username: username,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      phone: phoneNumber,
    };
    await registerUser(userObj);
  }

  useEffect(() => {
    setRenderHeader(false);
  }, []);

  return (
    <>
      <main>
        <div>
          <Link to="/">
            <h1 className="logo-login">Upsilon</h1>
          </Link>
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <section className="name-section">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                id="firstname"
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                id="lastname"
              />
            </section>
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
    </>
  );
}
