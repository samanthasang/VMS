import * as React from "react";

const SvgH2X = ({ title, titleId, ...props }) => (
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
      d="M2.51 11.27c.847-.68 1.51-1.237 1.99-1.67.48-.44.883-.897 1.21-1.37.333-.48.5-.95.5-1.41 0-.433-.107-.773-.32-1.02-.207-.253-.543-.38-1.01-.38-.453 0-.807.143-1.06.43-.247.28-.38.657-.4 1.13h-.88c.027-.747.253-1.323.68-1.73.427-.407.977-.61 1.65-.61.687 0 1.23.19 1.63.57.407.38.61.903.61 1.57 0 .553-.167 1.093-.5 1.62-.327.52-.7.98-1.12 1.38-.42.393-.957.853-1.61 1.38h3.44v.76H2.51v-.65Zm9.012-2.75 2.14 3.48h-1.03l-1.67-2.72L9.372 12h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
      fill="url(#H2X_svg__a)"
    />
    <defs>
      <linearGradient
        id="H2X_svg__a"
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

export default SvgH2X;
