import * as React from "react";

const SvgRole = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.87 11.875a4.142 4.142 0 1 0 0-8.283 4.142 4.142 0 0 0 0 8.283Zm5.918 2.958c-2.367-2.367-9.467-2.367-11.834 0-1.221 1.222-1.252 3.825-1.21 4.873.01.258.223.452.48.452h13.287c.26 0 .475-.198.483-.457.032-1.06-.02-3.681-1.206-4.868Z"
      fill="#EEE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.913 10.885a4.142 4.142 0 1 1 0-7.486 4.142 4.142 0 0 0 0 7.486Zm0 1.695c-2.87-.375-6.21.18-7.692 1.662-1.221 1.221-1.253 3.824-1.21 4.873.01.257.223.451.48.451h3.55a.474.474 0 0 1-.48-.451c-.043-1.049-.011-3.652 1.21-4.873.884-.885 2.43-1.439 4.141-1.662Z"
      fill="#EEE"
    />
  </svg>
);

export default SvgRole;
