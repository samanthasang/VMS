import * as React from "react";

const SvgCheckboxActive = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z"
      fill="#2B87DB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Z"
      fill="#113B61"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.466 6.115a1 1 0 0 1 .419 1.35l-4.608 8.756a1.5 1.5 0 0 1-2.576.134l-2.533-3.8a1 1 0 0 1 1.664-1.11l2.067 3.1 4.216-8.01a1 1 0 0 1 1.35-.42Z"
      fill="#113B61"
    />
  </svg>
);

export default SvgCheckboxActive;
