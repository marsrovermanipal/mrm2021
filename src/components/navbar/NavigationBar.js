import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Alert,
  NavLink,
} from "reactstrap";
import styles from "./Navi.module.css";
export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="col-12 bg-dark sticky-top px-2">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src="/logo.webp" alt="" className={`${styles.logo} img-fluid`} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbar-dark" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="col-12 justify-content-end" navbar>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/competitions">Competitions</NavLink>
            </NavItem>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/research">Research</NavLink>
            </NavItem>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/alumni">Our Alumni</NavLink>
            </NavItem>
            <NavItem className={`${styles.navlink} `}>
              <NavLink href="/sponsorship">Sponsorship</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <div className="text-center">
        <Alert className="m-0 fs-2 text-dark">
          We are recruiting!{" "}
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://forms.gle/cgcvRuMEJtYZ6irKA"
            className={`${styles.alert}`}
            target="_blank"
            rel="noreferrer"
          >
            Register Now!
          </a>
        </Alert>
      </div> */}
    </div>
  );
};
