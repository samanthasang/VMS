import * as React from "react";

const SvgHTimeClip = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#HTimeClip_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.756 2A1 1 0 0 0 .3 3.37l6.27 6.662a3 3 0 1 0 2.271 1.685c.197.019.396.008.59-.031a3 3 0 1 0 2.012-1.607l6.313-6.708A1 1 0 0 0 16.3 2L9.028 9.726 1.756 2Zm4.372 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="url(#HTimeClip_svg__b)"
      />
    </g>
    <defs>
      <linearGradient
        id="HTimeClip_svg__b"
        x1={9.028}
        y1={1.685}
        x2={9.028}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
      <clipPath id="HTimeClip_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHTimeClip;
