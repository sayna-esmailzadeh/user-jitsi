import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="md:container mx-auto md:my-9 m-3">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
