import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from "./Navi.module.css";
export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="col-12 bg-dark mb-4 sticky-top">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src="/logo.png" alt="" className={`${styles.logo} img-fluid`} />
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
    </div>
  );
};
