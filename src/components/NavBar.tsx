function NavBar() {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <a className="nav-item nav-link link-body-emphasis active" href="#">
          Technology
        </a>
        <a
          className="nav-item nav-link link-body-emphasis"
          href="/scrap-bucket-optimization"
        >
          Metallurgy
        </a>
        <a className="nav-item nav-link link-body-emphasis" href="#">
          Photography
        </a>
        <a className="nav-item nav-link link-body-emphasis" href="#">
          Cycling
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
