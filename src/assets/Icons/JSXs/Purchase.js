import * as React from "react";

const SvgPurchase = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M35 7.5H5A2.5 2.5 0 0 0 2.5 10v20A2.5 2.5 0 0 0 5 32.5h30a2.5 2.5 0 0 0 2.5-2.5V10A2.5 2.5 0 0 0 35 7.5Zm0 2.5v3.75H5V10h30ZM5 30V16.25h30V30H5Z"
      fill="#FF8225"
    />
    <path d="M7.5 25H20v2.5H7.5V25Z" fill="#FF8225" />
  </svg>
);

export default SvgPurchase;
