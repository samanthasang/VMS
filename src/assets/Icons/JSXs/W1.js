import * as React from "react";

const SvgW1 = ({ title, titleId, ...props }) => (
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
      d="M4.5 5h15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-3 1a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V6Zm5 1a1 1 0 0 0-1 1v8.143a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-11Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgW1;
