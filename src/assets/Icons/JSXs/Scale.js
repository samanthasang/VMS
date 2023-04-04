import * as React from "react";

const SvgScale = ({ title, titleId, ...props }) => (
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
      d="M15.5 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V3.5H16a.5.5 0 0 1-.5-.5ZM9 9.5a.5.5 0 0 1 .5.5v4.5H14a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.354 2.646a.5.5 0 0 1 0 .708l-11.5 11.5a.5.5 0 1 1-.707-.708l11.5-11.5a.5.5 0 0 1 .707 0Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 4A1.5 1.5 0 0 1 4 2.5h7a.5.5 0 0 1 0 1H4a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-7a.5.5 0 1 1 1 0v7a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgScale;
