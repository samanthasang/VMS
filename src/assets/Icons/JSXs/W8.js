import * as React from "react";

const SvgW8 = ({ title, titleId, ...props }) => (
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
    <g filter="url(#w_8_svg__a)">
      <rect width={34} height={27} rx={2} fill="#9199AC" />
      <path
        d="M3 0v27M7.5 0v27M12 0v27M16.5 0v27M34 10H0M34 13.5H0M34 17H0M34 20.5H0M33.539 3H.397M34 6.5H0M34 24H0M25.5 0v27M21 0v27M30 0v27"
        stroke="#5F687D"
        strokeWidth={0.5}
      />
    </g>
    <defs>
      <filter
        id="w_8_svg__a"
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
        <feBlend in2="shape" result="effect1_innerShadow_531_2563" />
      </filter>
    </defs>
  </svg>
);

export default SvgW8;
