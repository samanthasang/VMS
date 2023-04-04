import * as React from "react";

const SvgNumberNotactive = ({ title, titleId, ...props }) => (
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
      fill="#E1EEFA"
    />
    <path d="M10.228 8.194V7.06h2.394V17h-1.246V8.194h-1.148Z" fill="#657A9A" />
  </svg>
);

export default SvgNumberNotactive;
