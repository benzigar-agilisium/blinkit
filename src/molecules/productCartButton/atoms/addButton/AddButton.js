import React from "react";
import propTypes from "prop-types";

import styles from "./addButton.module.css";

const AddButton = ({ addCartClick = () => {} }) => (
  <button onClick={addCartClick} className={styles.addButton}>
    Add
  </button>
);

AddButton.propTypes = {
  addCartClick: propTypes.func,
};

AddButton.defaultProps = {
  addCartClick: () => {},
};

export default React.memo(AddButton);
