import * as React from "react";

const SvgPause = ({ title, titleId, ...props }) => (
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
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM2.044 12c0 5.499 4.457 9.956 9.956 9.956S21.956 17.5 21.956 12 17.5 2.044 12 2.044 2.044 6.5 2.044 12Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.75 7.75a1 1 0 1 0-2 0v7.946a1 1 0 1 0 2 0V7.75Zm4.5 0a1 1 0 1 0-2 0v7.946a1 1 0 1 0 2 0V7.75Z"
      fill="#EEE"
    />
  </svg>
);

export default SvgPause;
