import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const { firebaseUser } = useAuth();

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
          {!firebaseUser && (
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