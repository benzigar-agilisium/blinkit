import classNames from "classnames";
import React from "react";
import { BiRupee } from "react-icons/bi";

import Text from "../text";

export default function ProductPrice({
  strike = false,
  greenColor = false,
  showMinus = false,
  bold = true,
  price = 0,
  className = "",
}) {
  return (
    <div className={classNames("relative", { "text-green-600": greenColor }, className)}>
      <div className={classNames("flex items-center", { "font-bold": bold })}>
        {showMinus ? <Text>-</Text> : null}
        <BiRupee className="text-md m-0" />
        <p>{price}</p>
      </div>
      {strike ? (
        <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
          <div className="w-full h-[2px] bg-zinc-500"></div>
        </div>
      ) : null}
    </div>
  );
}
