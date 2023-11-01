import React from "react";

export default function Dropdown({ onChange = () => {}, selected = "", options = [] }) {
  return (
    <select
      onChange={onChange}
      className="focus:outline-none border-small-width text-green-800 border-2 pl-1 pr-10 rounded-sm ml-3 py-1 border-zinc-200"
      name=""
      id=""
    >
      {options?.map((option) => (
        <option value={option.id} selected={selected === option.id}>
          {option.display}
        </option>
      ))}
    </select>
  );
}
