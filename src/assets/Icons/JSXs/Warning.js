import * as React from "react";

const SvgWarning = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Warning_svg__a)">
      <path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
        fill="#EF4F4F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.883 3.441c.795 0 1.439.698 1.439 1.559v8.41c0 .86-.644 1.558-1.44 1.558-.794 0-1.438-.697-1.438-1.558V5c0-.86.644-1.559 1.439-1.559Z"
        fill="#F0F2F5"
      />
      <path
        d="M13.512 18.04a1.63 1.63 0 1 1-3.26 0 1.63 1.63 0 0 1 3.26 0Z"
        fill="#F0F2F5"
      />
    </g>
    <defs>
      <clipPath id="Warning_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWarning;
