import * as React from "react";

const SvgLoginFormBg = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 860 571"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#login-form-bg_svg__a)">
      <rect width={860} height={571} rx={8} fill="#000" fillOpacity={0.3} />
    </g>
    <defs>
      <filter
        id="login-form-bg_svg__a"
        x={-100}
        y={-100}
        width={1060}
        height={771}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={50} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_53_721"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_53_721"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLoginFormBg;
