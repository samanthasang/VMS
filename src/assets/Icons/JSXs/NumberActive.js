import * as React from "react";

const SvgNumberActive = ({ title, titleId, ...props }) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      fill="#113B61"
    />
    <path
      d="M10.728 8.29V7.154h2.394v9.94h-1.246V8.29h-1.148Z"
      fill="#F0F2F5"
    />
  </svg>
);

export default SvgNumberActive;
