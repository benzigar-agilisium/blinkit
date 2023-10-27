import React from "react";

export default function ProductCategoryWrapper({ children }) {
  return <div className="border-x-2 flex h-[80vh] border-small-width">{children}</div>;
}
