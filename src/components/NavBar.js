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
import Avatar from "./Avatar";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

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
        <NavLink
          className="text-dark"
          activeClassName={styles.Active}
          to="/saved"
        >
          Saved
        </NavLink>
        <NavLink className="text-dark" to="/" onClick={handleSignOut}>
          Sign out
        </NavLink>
        <NavLink to="/profile" className="ml-auto">
          <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
      </Nav>
    </>
  );
  const LoggedOut = (
    <>
      <Nav>
        <NavLink
          className="text-dark"
          activeClassName={styles.Active}
          to="/signin"
        >
          Sign In
        </NavLink>
        <NavLink
          className="text-dark"
          activeClassName={styles.Active}
          to="/signup"
        >
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

      <Navbar
        className={styles.NavBar}
        expanded={expanded}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            ref={ref}
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                exact
                className="text-dark"
                activeClassName={styles.Active}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-dark"
                activeClassName={styles.Active}
                to="/buy"
              >
                Buy
              </NavLink>
              <NavLink
                className="text-dark"
                activeClassName={styles.Active}
                to="/sell"
              >
                Sell
              </NavLink>
              <NavLink
                className="text-dark"
                activeClassName={styles.Active}
                to="/rent"
              >
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
