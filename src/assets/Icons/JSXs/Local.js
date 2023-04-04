import * as React from "react";

const SvgLocal = ({ title, titleId, ...props }) => (
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
      d="M3 3a1 1 0 0 0-1 1v11.154a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3Zm10.392 14.615a.3.3 0 0 1 .3.3v.862a.3.3 0 0 0 .3.3h3.785a.3.3 0 0 1 .3.3v.861a.3.3 0 0 1-.3.3H5.223a.3.3 0 0 1-.3-.3v-.861a.3.3 0 0 1 .3-.3h3.785a.3.3 0 0 0 .3-.3v-.862a.3.3 0 0 1 .3-.3h3.784Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgLocal;
