import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";

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
        <NavLink className="text-dark" to="">
          Saved
        </NavLink>
        <NavLink className="text-dark" to="/" onClick={handleSignOut}>
          Sign out
        </NavLink>
      </Nav>
    </>
  );
  const LoggedOut = (
    <>
      <Nav>
        <NavLink className="text-dark" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="text-dark" to="/signup">
          Sign Up
        </NavLink>
      </Nav>
    </>
  );
  return (
    <div>
      <NavLink to="/" className="text-center">
        <h1>Compass</h1>
      </NavLink>
      <Navbar className={styles.NavBar} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-dark" to="/">
                Home
              </NavLink>
              <NavLink className="text-dark" to="/buy">
                Buy
              </NavLink>
              <NavLink className="text-dark" to="/sell">
                Sell
              </NavLink>
              <NavLink className="text-dark" to="/rent">
                Rent
              </NavLink>
            </Nav>
            {currentUser ? LoggedIn : LoggedOut}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
