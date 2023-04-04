import * as React from "react";

const SvgLWarning = ({ title, titleId, ...props }) => (
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
      d="M11.983 22.733a1 1 0 0 1-.966 0l-8.96-4.948a1 1 0 0 1-.516-.875V7.09a1 1 0 0 1 .516-.875l8.96-4.948a1 1 0 0 1 .966 0l8.96 4.948a1 1 0 0 1 .516.875v9.82a1 1 0 0 1-.516.875l-8.96 4.948Z"
      fill="#68A9E5"
    />
    <rect
      x={10.063}
      y={6.313}
      width={2.875}
      height={2.875}
      rx={1}
      fill="#113B61"
    />
    <rect
      x={10.063}
      y={10.625}
      width={2.875}
      height={7.188}
      rx={1}
      fill="#113B61"
    />
  </svg>
);

export default SvgLWarning;
