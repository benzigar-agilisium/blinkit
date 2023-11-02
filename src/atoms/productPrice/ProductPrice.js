import classNames from "classnames";
import React from "react";
import { BiRupee } from "react-icons/bi";

import propTypes from "prop-types";

import Text from "../text";

export default function ProductPrice({ strike, greenColor, showMinus, bold, price, className }) {
  return (
    <div className={classNames("relative", { "text-green-600": greenColor }, { "opacity-50": strike }, className)}>
      <div className={classNames("flex items-center", { "font-bold": bold })}>
        {showMinus ? <Text>-</Text> : null}
        <BiRupee className="text-md m-0" />
        <p>{Intl.NumberFormat("en-IN").format(price)}</p>
      </div>
      {strike ? (
        <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
          <div className="w-full h-[2px] bg-zinc-500"></div>
        </div>
      ) : null}
    </div>
  );
}

ProductPrice.propTypes = {
  strike: propTypes.bool,
  greenColor: propTypes.bool,
  showMinus: propTypes.bool,
  bold: propTypes.bool,
  price: propTypes.number,
  className: propTypes.string,
};

ProductPrice.defaultProps = {
  strike: false,
  greenColor: false,
  showMinus: false,
  bold: true,
  price: 0,
  className: "",
};
