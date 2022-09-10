import * as React from "react";

const SvgW6 = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 34 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#w_6_svg__a)">
      <rect width={34} height={27} rx={2} fill="#9199AC" />
      <path
        d="M5 0v27M11 0v27M17 0v27M34 17H0M34 5H0M34 11H0M34 23H0M23 0v27M29 0v27"
        stroke="#5F687D"
        strokeWidth={0.5}
      />
    </g>
    <defs>
      <filter
        id="w_6_svg__a"
        x={0}
        y={0}
        width={34}
        height={27}
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
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_531_2561" />
      </filter>
    </defs>
  </svg>
);

export default SvgW6;
