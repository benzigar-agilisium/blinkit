import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import styles from "./buttonWithQuantityNumber.module.css";

const ButtonWithQuantityNumber = React.memo(({ quantity, removeQuantityClick, addQuantityClick }) => (
  <div className={styles.quantityButton}>
    <button className="py-3" onClick={removeQuantityClick}>
      <AiOutlineMinus className="text-md" />
    </button>
    <p>{quantity}</p>
    <button className="py-3" onClick={addQuantityClick}>
      <AiOutlinePlus className="text-md" />
    </button>
  </div>
));

export default React.memo(ButtonWithQuantityNumber);
