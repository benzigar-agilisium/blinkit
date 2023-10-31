import React from "react";
import Text from "../text";

export default function SearchEmptyPlaceholder() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <img className="h-[240px]" src="https://blinkit.com/57070263a359a92dc0fe.png" alt="" />
      <Text dim size="tiny">
        No Results yet.
      </Text>
    </div>
  );
}
