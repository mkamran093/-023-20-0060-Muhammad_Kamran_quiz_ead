/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconOutlineFilter1 = ({ color = "#111827", className }) => {
  return (
    <svg
      className={`icon-outline-filter-1 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 25 15"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.22192 2.82965C3.22192 2.27737 3.66964 1.82965 4.22192 1.82965H20.3367C20.889 1.82965 21.3367 2.27737 21.3367 2.82965V3.70587C21.3367 4.05556 21.1541 4.37985 20.855 4.56109L14.7738 8.24635C14.4748 8.42758 14.2921 8.75187 14.2921 9.10157V10.3679L10.2666 12.8074V9.10157C10.2666 8.75187 10.0839 8.42758 9.78485 8.24635L3.70365 4.56109C3.40459 4.37985 3.22192 4.05556 3.22192 3.70587V2.82965Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

IconOutlineFilter1.propTypes = {
  color: PropTypes.string,
};
