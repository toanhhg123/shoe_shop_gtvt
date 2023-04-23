import { Outlet } from "react-router";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const Layout = () => {
  const cookies = Cookies.get("X-Access-Token");
  if (!cookies) return <Navigate to={"/login"} />;
  return (
    <div className="container-scroller" style={{ height: "100vh" }}>
      <SideBar />
      <Navbar />
      <div className="main-panel">
        <div className="content-wrapper">
          <Outlet />
        </div>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
              Copyright © bootstrapdash.com 2020
              <br />
              Distributed By{" "}
              <a
                href="https://www.themewagon.com"
                target="_blank"
                rel="noreferrer"
              >
                ThemeWagon{" "}
              </a>
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              {" "}
              Free{" "}
              <a
                href="https://www.bootstrapdash.com/bootstrap-admin-template/"
                target="_blank"
                rel="noreferrer"
              >
                Bootstrap admin templates
              </a>{" "}
              from Bootstrapdash.com
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
