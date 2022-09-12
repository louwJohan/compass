import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const LoggedIn = (
    <>
      <Nav>
        <Link className="text-dark" to="">
          Saved
        </Link>
        <Link className="text-dark" to="/" onClick={handleSignOut}>
          Sign Out
        </Link>
      </Nav>
    </>
  );
  const LoggedOut = (
    <>
      <Nav>
        <Link className="text-dark" to="/signin">
          Sign In
        </Link>
        <Link className="text-dark" to="/signup">
          Sign Up
        </Link>
      </Nav>
    </>
  );
  return (
    <div>
      <Link to="/" className="text-center">
        <h1>Compass</h1>
      </Link>
      <Navbar className={styles.NavBar} collapseOnSelect expand="lg">
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
            {currentUser ? LoggedIn : LoggedOut}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
