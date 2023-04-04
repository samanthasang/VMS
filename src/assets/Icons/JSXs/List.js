import * as React from "react";

const SvgList = ({ title, titleId, ...props }) => (
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
      d="M2.5 4a.5.5 0 0 0 0 1h18.917a.5.5 0 1 0 0-1H2.5Zm0 5.045a.5.5 0 1 0 0 1h18.917a.5.5 0 1 0 0-1H2.5ZM2 14.589a.5.5 0 0 1 .5-.5h18.917a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm.5 4.544a.5.5 0 0 0 0 1h18.917a.5.5 0 1 0 0-1H2.5Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgList;
