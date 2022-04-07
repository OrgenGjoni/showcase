import React from "react";
import "./nav_bar.scss";

interface NavBarProps {
  children: React.ReactChild | React.ReactChildren;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__inner">{children}</div>
    </nav>
  );
};

export default NavBar;
