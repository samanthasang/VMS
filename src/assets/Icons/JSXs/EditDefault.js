import * as React from "react";

const SvgEditDefault = ({ title, titleId, ...props }) => (
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
      d="M21 5.519 17.482 2 3.407 16.074 2 21l4.926-1.407L21 5.519Zm-6.333-.704 3.518 3.518-3.518-3.518Zm-11.26 11.26 3.519 3.518-3.519-3.519Z"
      stroke="#EFEFEF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEditDefault;
