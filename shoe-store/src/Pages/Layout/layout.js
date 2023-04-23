import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <span>{children}</span>

      <Footer />
    </div>
  );
};

export default Layout;
