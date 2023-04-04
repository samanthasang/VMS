import * as React from "react";

const SvgCam1Hover = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#cam1-Hover_svg__a)" stroke="#EFEFEF">
      <circle cx={7.5} cy={6.334} r={4.5} />
      <circle cx={7.499} cy={6.333} r={1.583} fill="#EFEFEF" />
      <path
        d="M3.334 14.667S5.001 13 7.501 13s4.166 1.667 4.166 1.667"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="cam1-Hover_svg__a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCam1Hover;
