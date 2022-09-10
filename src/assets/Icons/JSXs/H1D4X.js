import * as React from "react";

const SvgH1D4X = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#H1D4X_svg__a)">
      <path
        d="M.38 5.6v-.83h1.88V12h-.92V5.6H.38Zm6.19 4.79V9.7l3.51-4.86h1.09V9.6h1v.79h-1V12h-.9v-1.61h-3.7Zm3.74-4.6L7.62 9.6h2.69V5.79Zm5.918 2.73 2.14 3.48h-1.03l-1.67-2.72-1.59 2.72h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
        fill="url(#H1D4X_svg__b)"
      />
      <path
        d="m5.65 5.082-1.872 6.544"
        stroke="url(#H1D4X_svg__c)"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <linearGradient
        id="H1D4X_svg__b"
        x1={10}
        y1={1}
        x2={10}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
      <linearGradient
        id="H1D4X_svg__c"
        x1={4.325}
        y1={5.248}
        x2={5.103}
        y2={11.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
      <clipPath id="H1D4X_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgH1D4X;
