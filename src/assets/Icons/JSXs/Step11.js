import * as React from "react";

const SvgStep11 = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 430 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#Step1-1_svg__a)">
      <path
        d="M0 0h402c15.464 0 28 12.536 28 28s-12.536 28-28 28H0V0Z"
        fill="url(#Step1-1_svg__b)"
      />
    </g>
    <defs>
      <linearGradient
        id="Step1-1_svg__b"
        x1={0}
        y1={27.692}
        x2={430}
        y2={27.692}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A4CCF0" />
        <stop offset={1} stopColor="#2175C2" />
      </linearGradient>
      <filter
        id="Step1-1_svg__a"
        x={0}
        y={0}
        width={430}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.97 0" />
        <feBlend in2="shape" result="effect1_innerShadow_211_457" />
      </filter>
    </defs>
  </svg>
);

export default SvgStep11;
