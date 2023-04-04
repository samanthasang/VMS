import * as React from "react";

const SvgView = ({ title, titleId, ...props }) => (
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
      d="M3 3.5a.5.5 0 0 1 .5-.5h6.333a.5.5 0 0 1 .5.5v6.333a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5V3.5Zm-1-1a.5.5 0 0 1 .5-.5h8.333a.5.5 0 0 1 .5.5v8.333a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V2.5Zm11.667 1a.5.5 0 0 1 .5-.5H20.5a.5.5 0 0 1 .5.5v6.333a.5.5 0 0 1-.5.5h-6.333a.5.5 0 0 1-.5-.5V3.5Zm-1-1a.5.5 0 0 1 .5-.5H21.5a.5.5 0 0 1 .5.5v8.333a.5.5 0 0 1-.5.5h-8.333a.5.5 0 0 1-.5-.5V2.5ZM21 14.167a.5.5 0 0 0-.5-.5h-6.333a.5.5 0 0 0-.5.5V20.5a.5.5 0 0 0 .5.5H20.5a.5.5 0 0 0 .5-.5v-6.333Zm-7.333-1.5h-.5a.5.5 0 0 0-.5.5V21.5a.5.5 0 0 0 .5.5H21.5a.5.5 0 0 0 .5-.5v-8.333a.5.5 0 0 0-.5-.5h-7.833ZM3 14.167a.5.5 0 0 1 .5-.5h6.333a.5.5 0 0 1 .5.5V20.5a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-6.333Zm-1-1a.5.5 0 0 1 .5-.5h8.333a.5.5 0 0 1 .5.5V21.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-8.333Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgView;
