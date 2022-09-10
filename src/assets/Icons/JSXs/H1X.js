import * as React from "react";

const SvgH1X = ({ title, titleId, ...props }) => (
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
    <path
      d="M4.38 5.6v-.83h1.88V12h-.92V5.6h-.96Zm6.593 2.92 2.14 3.48h-1.03l-1.67-2.72L8.823 12h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
      fill="url(#H1X_svg__a)"
    />
    <defs>
      <linearGradient
        id="H1X_svg__a"
        x1={9}
        y1={1}
        x2={9}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgH1X;
