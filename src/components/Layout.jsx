

import React from "react";
import MainText from "./MainText";
import Navbar from "./Navbar";
import Scroll from "./Scroll";


function Layout({ children }) {
  const stylesBackground={backgroundColor:"#E5E9F2", width:"100%"};
  return (
    <div style={stylesBackground}>
      <Navbar />
      <MainText />
      <Scroll name="/scroll.png" />
      <div>
      {children}
      </div>
    </div>
  );
}

export default Layout;
