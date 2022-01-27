import React from "react";
import Nav from "./Nav";

const Layout = ({ children, authenticated, currentUser }) => (
  
    <div>
      <Nav authenticated={authenticated} currentUser={currentUser} />
      {children}
    </div>
  );

export default Layout;
