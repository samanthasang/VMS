import * as React from "react";

const SvgHPlay = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.5 16c0 8.008-6.492 14.5-14.5 14.5S1.5 24.008 1.5 16 7.992 1.5 16 1.5 30.5 7.992 30.5 16Zm1 0c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16Zm-18 6.062 9-5.196a1 1 0 0 0 0-1.732l-9-5.196a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866Z"
      fill="url(#HPlay_svg__a)"
    />
    <defs>
      <linearGradient
        id="HPlay_svg__a"
        x1={16}
        y1={0.5}
        x2={16}
        y2={31.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgHPlay;
