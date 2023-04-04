import * as React from "react";

const SvgH15 = ({ title, titleId, ...props }) => (
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
    <g filter="url(#H15_svg__a)">
      <rect width={34} height={27} rx={2} fill="url(#H15_svg__b)" />
      <path
        d="M10 18v9M34 8H23M34 18H0M23 0v27"
        stroke="#195892"
        strokeWidth={0.5}
      />
      <path
        d="M4.63 9.25V7.794h2.912V18h-1.61V9.25H4.63Zm13.008 4.368h-2.829v2.898h-1.483v-2.898h-2.829v-1.344h2.829V9.376h1.483v2.898h2.829v1.344Zm9.02-4.452h-4.69v2.786c.197-.261.486-.48.869-.658a2.989 2.989 0 0 1 1.246-.266c.784 0 1.418.168 1.904.504.494.336.844.76 1.05 1.274.214.513.322 1.055.322 1.624 0 .69-.136 1.307-.406 1.848a2.922 2.922 0 0 1-1.19 1.26c-.523.308-1.167.462-1.932.462-1.018 0-1.834-.252-2.45-.756-.616-.504-.985-1.171-1.106-2.002h1.554c.102.439.331.789.686 1.05.354.252.798.378 1.33.378.662 0 1.157-.2 1.484-.602.336-.401.504-.933.504-1.596 0-.672-.168-1.185-.504-1.54-.336-.364-.831-.546-1.484-.546-.458 0-.845.117-1.162.35a1.897 1.897 0 0 0-.672.924h-1.512V7.766h6.16v1.4Z"
        fill="#D1D7E1"
      />
    </g>
    <defs>
      <linearGradient
        id="H15_svg__b"
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
        id="H15_svg__a"
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
        <feBlend in2="shape" result="effect1_innerShadow_531_2461" />
      </filter>
    </defs>
  </svg>
);

export default SvgH15;
