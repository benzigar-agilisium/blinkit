import React from "react";

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
