import * as React from "react";

const SvgNotaccept2 = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20 10a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z" stroke="#EF4F4F" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.633 5.133a.455.455 0 0 1 .643 0L10.5 9.357l4.224-4.224a.455.455 0 0 1 .643.643L11.143 10l4.224 4.224a.455.455 0 0 1-.643.643L10.5 10.643l-4.224 4.224a.455.455 0 1 1-.643-.643L9.857 10 5.633 5.776a.455.455 0 0 1 0-.643Z"
      fill="#EF4F4F"
      stroke="#EF4F4F"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgNotaccept2;
