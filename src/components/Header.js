import React from "react";
import Logo from "./Icons/IconLogo";

export default function Header({ name, text }) {
  return (
    <div className="header">
      <div className="logo-section">
        <Logo />
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
