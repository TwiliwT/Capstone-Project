import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext";
import { RenderContext } from "../../contexts/RenderHeader";
import { loginUser } from "../../API";

import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
      setUsername("");
      setPassword("");
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <main className="main-login">
        <div className="logo-container-login">
          <Link to="/">
            <h1 className="logo-login">Upsilon</h1>
          </Link>
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <section className="username-section">
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
            <section className="password-section">
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
            <section className="login-error-section">
              {error && <p>{`${error}`}</p>}
            </section>
            <section className="login-button-section">
              <button type="submit">Login</button>
            </section>
            <section className="to-register">
              <Link to="/Register">
                <p>Don't have an account? Register Here.</p>
              </Link>
            </section>
          </form>
        </div>
      </main>
    </>
  );
}
