import * as React from "react";

const SvgSuccess = ({ title, titleId, ...props }) => (
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
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
      fill="#41C967"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.646 5.646a1.5 1.5 0 0 1 .708 2l-4.388 9.204c-.669 1.402-2.61 1.54-3.47.246L6.75 12.97a1.5 1.5 0 1 1 2.498-1.66l1.768 2.658 3.63-7.613a1.5 1.5 0 0 1 1.999-.708Z"
      fill="#F0F2F5"
    />
  </svg>
);

export default SvgSuccess;
