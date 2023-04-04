import * as React from "react";

const SvgEditHover = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M21 5.519 17.482 2 3.407 16.074 2 21l4.926-1.407L21 5.519Zm-6.333-.704 3.518 3.518-3.518-3.518Zm-11.26 11.26 3.519 3.518-3.519-3.519Z"
      stroke="url(#EditHover_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="EditHover_svg__a"
        x1={11.5}
        y1={2}
        x2={11.5}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgEditHover;
