import React from "react";
import PropType from "prop-types";

export default function ProductClockIcon({ time = "" }) {
  if (!time) return null;
  return (
    <div className="flex">
      <div className="bg-zinc-100 px-1 mb-2 rounded-md flex items-center">
        <img
          className="h-3 w-3"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
          alt=""
        />
        <p
          style={{
            fontWeight: 600,
            fontSize: 10,
          }}
        >
          {time}
        </p>
      </div>
    </div>
  );
}

ProductClockIcon.propType = {
  time: PropType.string, // 20 mins
};
