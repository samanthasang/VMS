import * as React from "react";

const SvgSnapshot = ({ title, titleId, ...props }) => (
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
      d="M8.562 5.5a1.5 1.5 0 0 1 1.5-1.5h4.351a1.5 1.5 0 0 1 1.5 1.5v1.675h4.64a1.5 1.5 0 0 1 1.5 1.5v10.702a1.5 1.5 0 0 1-1.5 1.5H3.5a1.5 1.5 0 0 1-1.5-1.5V8.675a1.5 1.5 0 0 1 1.5-1.5h5.062V5.5Zm6.851 2.675.037-.001a.5.5 0 0 0 .038.001h5.064a.5.5 0 0 1 .5.5v10.702a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5V8.675a.5.5 0 0 1 .5-.5h5.481l.041-.001a.5.5 0 0 0 .54-.498V5.5a.5.5 0 0 1 .5-.5h4.351a.5.5 0 0 1 .5.5v2.175a.5.5 0 0 0 .5.5ZM12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1.011a2.989 2.989 0 1 1 0-5.978 2.989 2.989 0 0 1 0 5.978Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgSnapshot;
