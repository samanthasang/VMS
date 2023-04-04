import * as React from "react";

const SvgH68 = ({ title, titleId, ...props }) => (
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
    <g filter="url(#H68_svg__a)">
      <rect width={34} height={27} rx={2} fill="url(#H68_svg__b)" />
      <path
        d="M4 0v27M9 0v27M14 0v27M34 11H0M34 15H0M34 19H0M34 3H0M34 7H0M34 23H0M24 0v27M19 0v27M29 0v27"
        stroke="#195892"
        strokeWidth={0.5}
      />
      <path
        d="M10.328 10.16c-.103-.43-.29-.751-.56-.966-.27-.215-.649-.322-1.134-.322-.737 0-1.288.285-1.652.854-.364.56-.555 1.493-.574 2.8.243-.41.597-.728 1.064-.952.467-.224.97-.336 1.512-.336.616 0 1.157.135 1.624.406.476.261.845.644 1.106 1.148.27.504.406 1.106.406 1.806 0 .653-.13 1.237-.392 1.75-.252.513-.63.92-1.134 1.218-.504.29-1.11.434-1.82.434-.961 0-1.717-.21-2.268-.63-.541-.43-.924-1.031-1.148-1.806-.215-.775-.322-1.74-.322-2.898 0-3.416 1.204-5.124 3.612-5.124.933 0 1.666.252 2.198.756a2.98 2.98 0 0 1 .952 1.862h-1.47ZM6.59 14.57c0 .644.182 1.157.546 1.54.373.373.891.56 1.554.56.588 0 1.05-.182 1.386-.546.345-.364.518-.85.518-1.456 0-.635-.168-1.139-.504-1.512-.327-.383-.812-.574-1.456-.574-.57 0-1.055.173-1.456.518-.392.336-.588.826-.588 1.47Zm12.055-6.076.63 1.12-1.918.714 1.918.714-.644 1.148-1.596-1.26.294 2.03h-1.288l.266-2.03-1.596 1.288-.672-1.19 1.904-.714-1.904-.686.644-1.148 1.638 1.26-.28-2.044h1.302l-.308 2.044 1.61-1.246Zm2.848 1.736c0-.504.126-.966.378-1.386.252-.42.63-.751 1.134-.994.504-.252 1.12-.378 1.848-.378.719 0 1.33.126 1.834.378.513.243.896.574 1.148.994.252.42.378.882.378 1.386 0 .523-.135.985-.406 1.386a2.62 2.62 0 0 1-1.05.91c.532.205.952.532 1.26.98.308.448.462.985.462 1.61 0 .635-.154 1.19-.462 1.666-.308.467-.737.83-1.288 1.092-.55.252-1.176.378-1.876.378s-1.325-.126-1.876-.378a3.106 3.106 0 0 1-1.274-1.092c-.308-.476-.462-1.031-.462-1.666s.154-1.176.462-1.624c.308-.448.723-.77 1.246-.966-.97-.485-1.456-1.25-1.456-2.296Zm1.54.21c0 .467.168.85.504 1.148.345.29.784.434 1.316.434s.97-.15 1.316-.448a1.45 1.45 0 0 0 .518-1.148c0-.523-.163-.924-.49-1.204-.327-.28-.775-.42-1.344-.42-.56 0-1.003.14-1.33.42-.327.28-.49.686-.49 1.218Zm-.266 4.62c0 .56.187 1.013.56 1.358.373.336.882.504 1.526.504.635 0 1.134-.173 1.498-.518.373-.345.56-.793.56-1.344 0-.588-.187-1.04-.56-1.358-.373-.317-.873-.476-1.498-.476-.616 0-1.12.154-1.512.462-.383.308-.574.765-.574 1.372Z"
        fill="#D1D7E1"
      />
    </g>
    <defs>
      <linearGradient
        id="H68_svg__b"
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
        id="H68_svg__a"
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
        <feBlend in2="shape" result="effect1_innerShadow_530_2408" />
      </filter>
    </defs>
  </svg>
);

export default SvgH68;