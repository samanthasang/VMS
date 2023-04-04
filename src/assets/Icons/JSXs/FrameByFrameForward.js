import * as React from "react";

const SvgFrameByFrameForward = ({ title, titleId, ...props }) => (
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
      d="M14.25 12.433 9 15.464a.5.5 0 0 1-.75-.433V8.97A.5.5 0 0 1 9 8.536l5.25 3.031c.166.096.25.264.25.432V8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-1 0v-4a.497.497 0 0 1-.25.433Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM2.044 12c0 5.499 4.457 9.956 9.956 9.956S21.956 17.5 21.956 12 17.5 2.044 12 2.044 2.044 6.5 2.044 12Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgFrameByFrameForward;
