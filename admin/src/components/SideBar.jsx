import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="index.html">
          <img src="/assets/images/logo.svg" alt="logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="index.html">
          <img src="/assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer"></i>
            </span>
            <span className="menu-title">DashBoard</span>
          </Link>
        </li>
        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="menu-icon">
              <i className="mdi mdi-laptop"></i>
            </span>
            <span className="menu-title">products</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product/create">
                  create
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="nav-item menu-items">
          <a className="nav-link" href="pages/forms/basic_elements.html">
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play"></i>
            </span>
            <span className="menu-title">Form Elements</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/tables/basic-table.html">
            <span className="menu-icon">
              <i className="mdi mdi-table-large"></i>
            </span>
            <span className="menu-title">Tables</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/charts/chartjs.html">
            <span className="menu-icon">
              <i className="mdi mdi-chart-bar"></i>
            </span>
            <span className="menu-title">Charts</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/icons/mdi.html">
            <span className="menu-icon">
              <i className="mdi mdi-contacts"></i>
            </span>
            <span className="menu-title">Icons</span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"

          >
            <span className="menu-icon">
              <i className="mdi mdi-security"></i>
            </span>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/blank-page.html">
                  Blank Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-404.html">
                  404
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-500.html">
                  500
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/login.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/register.html">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <span className="menu-icon">
              <i className="mdi mdi-security"></i>
            </span>
            <span className="menu-title">User Manager</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="/users">
                  List User
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default SideBar;
