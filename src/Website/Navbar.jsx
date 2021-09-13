import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid navBg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar nab navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">
                  Shah
                </NavLink>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact activeClassName="linkActive"  className="nav-link act"  to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="linkActive"  className="nav-link act" to="/service">
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="linkActive" className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="linkActive"  className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
