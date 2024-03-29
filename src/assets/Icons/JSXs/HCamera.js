import * as React from "react";

const SvgHCamera = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.815 4.003h2.976c.66 0 1.198.537 1.209 1.186v7.219c0 .649-.537 1.186-1.197 1.186H2.197A1.19 1.19 0 0 1 1 12.408V5.189c0-.649.537-1.186 1.197-1.186h2.966a.229.229 0 0 0 .224-.179l.179-.873A1.187 1.187 0 0 1 6.73 2h2.518c.56 0 1.052.403 1.164.951l.179.873c.022.1.123.18.224.18Zm2.976 8.629c.123 0 .224-.101.224-.224V5.189c0-.123-.1-.223-.224-.223h-2.976c-.56 0-1.052-.403-1.164-.952l-.18-.873c-.01-.1-.111-.179-.212-.179H6.741a.229.229 0 0 0-.224.18l-.179.872a1.187 1.187 0 0 1-1.164.952H2.197c-.123 0-.223.1-.223.223v7.219c0 .123.1.224.223.224h11.594ZM4.872 8.804a3.121 3.121 0 0 1 3.122-3.111 3.121 3.121 0 0 1 3.123 3.111 3.121 3.121 0 0 1-3.123 3.111 3.121 3.121 0 0 1-3.122-3.11Zm.974 0c0 1.175.962 2.138 2.148 2.138a2.147 2.147 0 0 0 2.15-2.138 2.147 2.147 0 0 0-2.15-2.137 2.147 2.147 0 0 0-2.148 2.137Z"
      fill="url(#HCamera_svg__a)"
    />
    <defs>
      <linearGradient
        id="HCamera_svg__a"
        x1={8}
        y1={2}
        x2={8}
        y2={13.594}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D6AB0" />
        <stop offset={1} stopColor="#103A64" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgHCamera;
