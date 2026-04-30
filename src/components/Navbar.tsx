import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { logoutUser } from "../services/auth";

export function Navbar() {
  const { firebaseUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" to="/">
            Tournament Hub
          </Link>
          <nav aria-label="Primary Navigation">
            <ul className="nav-list">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="nav-auth">
            {firebaseUser ? (
                <button className="btn btn-ghost" onClick={handleLogout}>
                  Log out
                </button>
            ) : (
                <>
                  <Link className="btn btn-ghost" to="/login">
                    Log in
                  </Link>
                  <Link className="btn btn-primary" to="/register">
                    Sign up
                  </Link>
                </>
            )}
          </div>
        </div>
      </header>
  );
}