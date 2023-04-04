import * as React from "react";

const SvgH46 = ({ title, titleId, ...props }) => (
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
    <g filter="url(#H46_svg__a)">
      <rect width={34} height={27} rx={2} fill="url(#H46_svg__b)" />
      <path
        d="M7 0v27M14 0v27M34 13H0M34 6H0M34 20H0M21 0v27M28 0v27"
        stroke="#195892"
        strokeWidth={0.5}
      />
      <path
        d="M4.644 15.872v-1.204L9.348 7.92h1.932v6.566h1.302v1.386H11.28V18H9.712v-2.128H4.644Zm5.138-6.328-3.304 4.942h3.304V9.544Zm8.945-1.05.63 1.12-1.918.714 1.919.714-.645 1.148-1.596-1.26.294 2.03h-1.288l.267-2.03-1.597 1.288-.671-1.19 1.904-.714-1.905-.686.644-1.148 1.639 1.26-.28-2.044h1.302l-.308 2.044 1.61-1.246Zm8.07 1.666c-.102-.43-.29-.751-.56-.966-.27-.215-.648-.322-1.134-.322-.737 0-1.288.285-1.652.854-.364.56-.555 1.493-.574 2.8.243-.41.598-.728 1.064-.952.467-.224.97-.336 1.512-.336.616 0 1.157.135 1.624.406.476.261.845.644 1.106 1.148.27.504.406 1.106.406 1.806 0 .653-.13 1.237-.392 1.75-.252.513-.63.92-1.134 1.218-.504.29-1.11.434-1.82.434-.961 0-1.717-.21-2.268-.63-.541-.43-.924-1.031-1.148-1.806-.215-.775-.322-1.74-.322-2.898 0-3.416 1.204-5.124 3.612-5.124.933 0 1.666.252 2.198.756a2.98 2.98 0 0 1 .952 1.862h-1.47Zm-3.738 4.41c0 .644.182 1.157.546 1.54.373.373.892.56 1.554.56.588 0 1.05-.182 1.386-.546.345-.364.518-.85.518-1.456 0-.635-.168-1.139-.504-1.512-.326-.383-.812-.574-1.456-.574-.57 0-1.055.173-1.456.518-.392.336-.588.826-.588 1.47Z"
        fill="#D1D7E1"
      />
    </g>
    <defs>
      <linearGradient
        id="H46_svg__b"
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
        id="H46_svg__a"
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
        <feBlend in2="shape" result="effect1_innerShadow_530_2356" />
      </filter>
    </defs>
  </svg>
);

export default SvgH46;
