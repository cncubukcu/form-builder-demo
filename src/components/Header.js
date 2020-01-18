import React from 'react';
import logo from '../assets/logo.svg'

export default function Header({name, text}) {
  return (
    <div className="header">
    <div className="logo-section">
      <img src={logo} alt="formod logo" />{" "}
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  </div>
  )
}
