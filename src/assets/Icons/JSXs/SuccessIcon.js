import * as React from "react";

const SvgSuccessIcon = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={30} cy={30} r={30} fill="#4FEF7C" />
    <path
      d="m19 31.875 7.006 12.261a.5.5 0 0 0 .893-.047L39.625 15"
      stroke="#F0F2F5"
      strokeWidth={6}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgSuccessIcon;
