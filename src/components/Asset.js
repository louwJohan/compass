import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, height = 120 }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && (
        <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
      )}
      {src && <img src={src} alt={message} height="200" />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
