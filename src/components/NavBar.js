import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Compass</h1>
      </Link>
      <Navbar
        className={styles.NavBar}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-dark" to="/">
                Home
              </Link>
              <Link className="text-dark" to="/buy">
                Buy
              </Link>
              <Link className="text-dark" to="/sell">
                Sell
              </Link>
              <Link className="text-dark" to="/rent">
                Rent
              </Link>
            </Nav>
            <Nav>
              <Link className="text-dark" to="/signin">
                <i className="fa-solid fa-right-to-bracket"></i>
                Sign In
              </Link>
              <Link className="text-dark" to="/signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
