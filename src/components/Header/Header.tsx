import * as React from "react";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="" />
      </div>
    </header>
  );
}
