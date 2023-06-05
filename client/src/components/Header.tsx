import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <header className="shadow-sm">
      <div className="container p-2">
        <nav className="navbar">
          <div className="container-fluid">
            <img
              className="navbar-brand"
              src="logo-vertical.png"
              alt="Logo"
              height={64}
            />
            <a
              className="nav-link"
              href="/login"
              onClick={() => {
                logout();
              }}
            >
              <i className="bi bi-door-open-fill" />
              Sair
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
