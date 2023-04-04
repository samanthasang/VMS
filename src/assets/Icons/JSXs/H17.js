import * as React from "react";

const SvgH17 = ({ title, titleId, ...props }) => (
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
    <g filter="url(#H17_svg__a)">
      <rect width={34} height={27} rx={2} fill="url(#H17_svg__b)" />
      <path
        d="M7 20v7M17 20v7M34 13h-7M34 6h-7M34 20H0M27 0v27"
        stroke="#195892"
        strokeWidth={0.5}
      />
      <path
        d="M5.63 9.25V7.794h2.912V18h-1.61V9.25H5.63Zm13.008 4.368h-2.829v2.898h-1.483v-2.898h-2.829v-1.344h2.829V9.376h1.483v2.898h2.829v1.344Zm8.909-4.592L23.655 18h-1.61l3.934-8.806h-5.18V7.836h6.748v1.19Z"
        fill="#D1D7E1"
      />
    </g>
    <defs>
      <linearGradient
        id="H17_svg__b"
        x1={17}
        y1={0}
        x2={17}
        y2={27}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
      <filter
        id="H17_svg__a"
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
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
        <feBlend in2="shape" result="effect1_innerShadow_531_2480" />
      </filter>
    </defs>
  </svg>
);

export default SvgH17;
