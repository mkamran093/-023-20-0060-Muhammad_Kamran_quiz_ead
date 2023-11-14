/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconOutlineCheveronDown2 = ({ color = "#111827", className }) => {
  return (
    <svg
      className={`icon-outline-cheveron-down-2 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 25 15"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.641 5.36359L12.4184 9.53525L5.19574 5.36359"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

IconOutlineCheveronDown2.propTypes = {
  color: PropTypes.string,
};
