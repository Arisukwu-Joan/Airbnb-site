import React from "react";
import logo from "../image/logo.png";
import Group from "../image/group.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-log">
        <img src={logo} alt="nav-log" className="logo" />
      </div>
      <div className="multi-img">
        <img src={Group} alt="group" className="nav-img" />
        <h1 className="title">Online Experiences</h1>
        <p className="parag">
          Join Unique interactive activities led by one-of-a hosts-all without
          leaving home.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
