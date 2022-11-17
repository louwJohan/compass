import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0">&copy; 2022 Compass, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com"
              >
                <i className={`fa fa-instagram ${styles.Icon}`}></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
              >
                <i className={`fa fa-facebook ${styles.Icon}`}></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitter.com"
              >
                <i className={`fa fa-twitter ${styles.Icon}`}></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
