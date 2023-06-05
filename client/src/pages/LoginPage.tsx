import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function LoginPage() {
  const { token, updateToken } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleLogin(event: any) {
    event.preventDefault();
    fetch("http://localhost:3333/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token === undefined) {
          alert("Usuário ou senha incorretos");
          return;
        }
        updateToken(data.access_token);
        navigate("/admin");
      });
  }

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [token]);

  return (
    <form className="mt-5 max-w-512 m-auto">
      <img src="logo-vertical.png" alt="Logo" height={64} />
      <h1 className="h3 mb-3 fw-normal">Por favor, faça login</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Usuário"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="floatingInput">Usuário</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="floatingPassword">Senha</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={(event) => handleLogin(event)}
      >
        Entrar
      </button>
    </form>
  );
}
