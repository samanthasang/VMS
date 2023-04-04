import * as React from "react";

const SvgPass = ({ title, titleId, ...props }) => (
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
      d="M16.933 11.59c.258-.759.4-1.59.4-2.462 0-3.568-2.387-6.461-5.333-6.461S6.667 5.56 6.667 9.128c0 .872.142 1.703.4 2.462h-3.4a1 1 0 0 0-1 1v8.051a1 1 0 0 0 1 1h16.666a1 1 0 0 0 1-1V12.59a1 1 0 0 0-1-1h-3.4Zm-2.803 0c.504-.64.813-1.507.813-2.462 0-1.97-1.317-3.566-2.943-3.566-1.626 0-2.943 1.597-2.943 3.566 0 .955.31 1.822.813 2.462h4.26Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgPass;
