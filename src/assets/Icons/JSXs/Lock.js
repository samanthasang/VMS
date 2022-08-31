import * as React from "react";

const SvgLock = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.244 6.692a5.73 5.73 0 0 0 .3-1.846c0-2.676-1.79-4.846-4-4.846-2.208 0-4 2.17-4 4.846 0 .654.108 1.277.301 1.846h-2.3a1 1 0 0 0-1 1v5.539a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7.692a1 1 0 0 0-1-1h-2.3Zm-2.102 0c.378-.48.61-1.13.61-1.846 0-1.477-.988-2.674-2.207-2.674-1.22 0-2.208 1.197-2.208 2.674 0 .716.233 1.366.61 1.846h3.195Z"
      fill="#3D495D"
    />
  </svg>
);

export default SvgLock;
