import * as React from "react";

const SvgPlay = ({ title, titleId, ...props }) => (
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
      d="M16.75 11.567a.5.5 0 0 1 0 .866L10 16.33a.5.5 0 0 1-.75-.433V8.103A.5.5 0 0 1 10 7.67l6.75 3.897Z"
      fill="#EFEFEF"
    />
    <path
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM2.044 12c0 5.499 4.457 9.956 9.956 9.956S21.956 17.5 21.956 12 17.5 2.044 12 2.044 2.044 6.5 2.044 12Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgPlay;
