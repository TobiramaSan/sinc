import React from "react";

const Dot = ({ color }: any) => {
  return (
    <div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
      </svg>
    </div>
  );
};

export default Dot;
