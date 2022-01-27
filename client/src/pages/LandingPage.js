import React from "react";
import Nav from "../components/Nav";

export default ({ children }) => {
  return (
    <div className="landing-page">
      <section>
              <Nav />
              {children}
      </section>
    </div>
  );
};
