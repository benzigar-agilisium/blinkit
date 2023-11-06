import React from "react";
import Proptypes from "prop-types";

import styles from "./dropdown.module.css";

export default function Dropdown({ onChange = () => {}, selected = "", options = [] }) {
  return (
    <select onChange={onChange} className={styles.dropdown} name="" id="">
      {options?.map((option) => (
        <option value={option.id} selected={selected === option.id}>
          {option.display}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  onChange: Proptypes.func,
  selected: Proptypes.string,
  options: Proptypes.array,
};

Dropdown.defaultProps = { onChange: () => {}, selected: "", options: [] };
