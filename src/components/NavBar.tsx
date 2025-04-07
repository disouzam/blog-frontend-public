import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <Link className="nav-item nav-link link-body-emphasis" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link link-body-emphasis" to="/technology">
          Technology
        </Link>
        <Link
          className="nav-item nav-link link-body-emphasis active"
          to="/metallurgy"
        >
          Metallurgy
        </Link>
        <Link
          className="nav-item nav-link link-body-emphasis"
          to="/photography"
        >
          Photography
        </Link>
        <Link className="nav-item nav-link link-body-emphasis" to="/cycling">
          Cycling
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
