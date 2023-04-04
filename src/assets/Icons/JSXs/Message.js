import * as React from "react";

const SvgMessage = ({ title, titleId, ...props }) => (
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
      d="M11.937 5.375a1 1 0 0 1 1 1V14.5a1 1 0 0 1-2 0V6.375a1 1 0 0 1 1-1Z"
      fill="#EFEFEF"
    />
    <path
      d="M13.25 17.625a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgMessage;
