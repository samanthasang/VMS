import * as React from "react";

const SvgStop = ({ title, titleId, ...props }) => (
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
      d="M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-1.044c-5.499 0-9.956-4.457-9.956-9.956S6.5 2.044 12 2.044 21.956 6.5 21.956 12 17.5 21.956 12 21.956Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgStop;
