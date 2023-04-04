import * as React from "react";

const SvgCamNotactive = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={9.333} r={7.5} stroke="#EFEFEF" />
    <circle cx={12} cy={9.333} r={3.333} fill="#EFEFEF" />
    <path
      d="M5.333 22.667S8 20 12 20s6.667 2.667 6.667 2.667"
      stroke="#EFEFEF"
      strokeLinecap="round"
    />
    <circle
      cx={17.333}
      cy={16}
      r={4.583}
      fill="#fff"
      stroke="#EF4F4F"
      strokeWidth={1.5}
    />
    <path
      d="M14.667 13.333 20 18.667"
      stroke="#EF4F4F"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgCamNotactive;
