import * as React from "react";

const SvgCustomSplit = ({ title, titleId, ...props }) => (
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
      d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4Zm15.437 1.362a.474.474 0 0 0-.692-.002L6.661 14.8a.52.52 0 0 0-.138.286l-.299 2.051c-.045.31.184.588.483.588h2.306c.129 0 .253-.054.344-.149l9.056-9.41a.528.528 0 0 0 .002-.723l-1.978-2.08Z"
      fill="url(#CustomSplit_svg__a)"
    />
    <defs>
      <linearGradient
        id="CustomSplit_svg__a"
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

export default SvgCustomSplit;
