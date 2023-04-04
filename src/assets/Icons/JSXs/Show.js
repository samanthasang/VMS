import * as React from "react";

const SvgShow = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M17 9.5c0 1.5-4 5-8 5s-8-3.5-8-5 4-5 8-5 8 3.5 8 5Z"
      fill="#21242C"
    />
    <circle cx={9} cy={9.5} r={3} fill="#C8CCD5" />
    <path d="M14.5 4 3 15" stroke="#21242C" strokeLinecap="round" />
  </svg>
);

export default SvgShow;
