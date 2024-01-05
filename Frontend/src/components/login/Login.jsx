import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import { RenderContext } from "../../contexts/RenderHeader";
import { loginUser } from "../../API";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { token, setToken } = useContext(TokenContext);
  const { renderHeader, setRenderHeader } = useContext(RenderContext);
      

  const navigate = useNavigate();

  useEffect(() => {
    setRenderHeader(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      username,
      password,
    };
    const token = await loginUser(userObj);
    if (token) {
      setToken(token);
      navigate("/");
      localStorage.setItem("token", token);
      setError(null);
    } else {
      setError("Invalid username or password.");
    }
  };

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
              <input type="text" id="firstname" />
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" />
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
              <input type="email" id="email" />
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
