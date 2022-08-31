import * as React from "react";

const SvgW9 = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4Zm4.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2.412a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5.5Zm4.294 1a1 1 0 0 1 1-1h2.412a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.412a1 1 0 0 1-1-1V6Zm6.294-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H18.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.412ZM4.5 11.5a1 1 0 0 1 1-1h2.412a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-1Zm6.294-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2.412a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2.412Zm4.294 1a1 1 0 0 1 1-1H18.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.412a1 1 0 0 1-1-1v-1ZM5.5 16a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2.412a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5.5Zm4.294 1a1 1 0 0 1 1-1h2.412a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.412a1 1 0 0 1-1-1v-1Zm6.294-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H18.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2.412Z"
      fill="url(#W9_svg__a)"
    />
    <defs>
      <linearGradient
        id="W9_svg__a"
        x1={12}
        y1={1}
        x2={12}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#ADACAC" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgW9;
