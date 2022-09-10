import * as React from "react";

const SvgH1D2X = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#H1D2X_svg__a)">
      <path
        d="M.38 5.6v-.83h1.88V12h-.92V5.6H.38Zm6.3 5.67c.846-.68 1.51-1.237 1.99-1.67.48-.44.882-.897 1.21-1.37.332-.48.5-.95.5-1.41 0-.433-.107-.773-.32-1.02-.208-.253-.544-.38-1.01-.38-.454 0-.808.143-1.06.43-.248.28-.38.657-.4 1.13h-.88c.026-.747.252-1.323.68-1.73.426-.407.976-.61 1.65-.61.686 0 1.23.19 1.63.57.406.38.61.903.61 1.57 0 .553-.167 1.093-.5 1.62-.327.52-.7.98-1.12 1.38-.42.393-.958.853-1.61 1.38h3.44v.76H6.68v-.65Zm9.011-2.75 2.14 3.48h-1.03l-1.67-2.72-1.59 2.72h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
        fill="url(#H1D2X_svg__b)"
      />
      <path
        d="m5.65 5.082-1.872 6.544"
        stroke="url(#H1D2X_svg__c)"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <linearGradient
        id="H1D2X_svg__b"
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
        id="H1D2X_svg__c"
        x1={4.325}
        y1={5.248}
        x2={5.103}
        y2={11.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
      <clipPath id="H1D2X_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgH1D2X;
