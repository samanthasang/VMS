import * as React from "react";

const SvgUnion = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 1.5C6.649 1.5 1.5 6.649 1.5 13S6.649 24.5 13 24.5 24.5 19.351 24.5 13 19.351 1.5 13 1.5Zm0-1C6.096.5.5 6.096.5 13S6.096 25.5 13 25.5 25.5 19.904 25.5 13 19.904.5 13 .5Zm6.75 11.567a.5.5 0 0 1 0 .866l-6 3.464a.5.5 0 0 1-.75-.433v-2.598l-5.25 3.031a.5.5 0 0 1-.75-.433V9.036a.5.5 0 0 1 .75-.433L13 11.634V9.036a.5.5 0 0 1 .75-.433l6 3.464Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgUnion;
