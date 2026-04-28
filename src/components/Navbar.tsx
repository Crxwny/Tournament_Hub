import { Link, NavLink } from "react-router-dom";

export function Navbar() {
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
      </div>
    </header>
  );
}
