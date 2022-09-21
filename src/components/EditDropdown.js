import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css";

const Bars = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-sharp fa-solid fa-bars"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const EditDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={Bars} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          aria-label="delete"
          onClick={handleDelete}
        >
          <i className="fas fa-trash" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
