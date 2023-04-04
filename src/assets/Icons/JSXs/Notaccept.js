import * as React from "react";

const SvgNotaccept = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Z"
      fill="#EF4F4F"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.133 5.133a.455.455 0 0 1 .643 0L10 9.357l4.224-4.224a.455.455 0 0 1 .643.643L10.643 10l4.224 4.224a.455.455 0 0 1-.643.643L10 10.643l-4.224 4.224a.455.455 0 1 1-.643-.643L9.357 10 5.133 5.776a.455.455 0 0 1 0-.643Z"
      fill="#EFEFEF"
      stroke="#EFEFEF"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgNotaccept;
