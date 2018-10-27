import React from "react";
import logo from "../../../assets/logo.svg";
import "./Logo.scss";

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo-content">
        <img src={logo} alt="Kratos" className="logo-img" />
      </div>
    );
  }
}
