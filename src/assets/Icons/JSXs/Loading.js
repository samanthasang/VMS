import * as React from "react";

const SvgLoading = ({ title, titleId, ...props }) => (
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
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM5.31 12a6.69 6.69 0 1 0 13.38 0 6.69 6.69 0 0 0-13.38 0Z"
      fill="url(#Loading_svg__a)"
    />
    <defs>
      <linearGradient
        id="Loading_svg__a"
        x1={23}
        y1={5.783}
        x2={1}
        y2={15.826}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2E333D" />
        <stop offset={1} stopColor="#2E333D" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgLoading;
