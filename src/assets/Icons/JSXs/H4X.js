import * as React from "react";

const SvgH4X = ({ title, titleId, ...props }) => (
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
      d="M2.4 10.39V9.7l3.51-4.86H7V9.6h1v.79H7V12h-.9v-1.61H2.4Zm3.74-4.6L3.45 9.6h2.69V5.79Zm5.92 2.73L14.2 12h-1.03L11.5 9.28 9.91 12H8.9l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
      fill="url(#H4X_svg__a)"
    />
    <defs>
      <linearGradient
        id="H4X_svg__a"
        x1={8.5}
        y1={1}
        x2={8.5}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgH4X;
