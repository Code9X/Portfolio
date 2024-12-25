import React from "react";

function WunderGraphIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      {/* Outer Semicircle */}
      <path
        d="M50 90a40 40 0 1 1 28.28-11.72"
        stroke="white"
        strokeWidth="10"
        fill="none"
      />
      {/* W Shape */}
      <path
        d="M30 40 L40 70 L50 50 L60 70 L70 40"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WunderGraphIcon;
