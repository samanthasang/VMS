import * as React from "react";

const SvgDevice = ({ title, titleId, ...props }) => (
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
      d="M20.851 5.629A1 1 0 0 0 19.923 5H4.477a1 1 0 0 0-.928.629L1.072 11.82a1 1 0 0 0-.072.372V18a1 1 0 0 0 1 1h20.4a1 1 0 0 0 1-1v-5.807c0-.128-.024-.254-.072-.372L20.851 5.63ZM5.2 14.1a.7.7 0 0 1 .7-.7h12.6a.7.7 0 1 1 0 1.4H5.9a.7.7 0 0 1-.7-.7Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgDevice;
