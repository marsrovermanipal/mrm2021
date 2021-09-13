import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navi.module.css";
export default function Navi() {
  return (
    <div className="d-flex justify-content-between p-3">
      <NavLink to="/">
        <img src="/logo.png" className="img-fluid col-1" alt="" />
      </NavLink>
      <div>
        <p class={`m-3 fs-5 p-3 ${styles.navlink}`}>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </p>
        <p class={`m-3 fs-5 p-3 ${styles.navlink}`}>
          <NavLink to="/achievements" activeClassName="active">
            Achievements
          </NavLink>
        </p>
        <p class={`m-3 fs-5 p-3 ${styles.navlink}`}>
          <NavLink to="/contact-us" activeClassName="active">
            Contact Us
          </NavLink>
        </p>
        <p class={`m-3 fs-5 p-3 ${styles.navlink}`}>
          <NavLink to="/about-us" activeClassName="active">
            About us
          </NavLink>
        </p>
      </div>
    </div>
  );
}
