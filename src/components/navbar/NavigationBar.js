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
    <div className="col-12">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src="/logo.png" alt="" className={`${styles.logo} img-fluid`} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbar-dark" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="col-12 justify-content-end" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/competitions">Competitions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/research">Research</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/alumni">Our Alumni</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
