import * as React from "react";

const SvgHBackward = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 25.5c6.351 0 11.5-5.149 11.5-11.5S20.351 2.5 14 2.5 2.5 7.649 2.5 14 7.649 25.5 14 25.5Zm0 1c6.904 0 12.5-5.596 12.5-12.5S20.904 1.5 14 1.5 1.5 7.096 1.5 14 7.096 26.5 14 26.5ZM7.25 14.933a.5.5 0 0 1 0-.866l6-3.464a.5.5 0 0 1 .75.433v2.598l5.25-3.031a.5.5 0 0 1 .75.433v6.928a.5.5 0 0 1-.75.433L14 15.366v2.598a.5.5 0 0 1-.75.433l-6-3.464Z"
      fill="url(#HBackward_svg__a)"
    />
    <defs>
      <linearGradient
        id="HBackward_svg__a"
        x1={14}
        y1={1.5}
        x2={14}
        y2={26.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgHBackward;
