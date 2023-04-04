import * as React from "react";

const SvgRight = ({ title, titleId, ...props }) => (
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
    <path d="M21 11.844 3 22.688V1l18 10.844Z" fill="#EFEFEF" />
  </svg>
);

export default SvgRight;
