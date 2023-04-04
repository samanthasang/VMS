import * as React from "react";

const SvgClose = ({ title, titleId, ...props }) => (
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
      d="M3.226 3.226a.773.773 0 0 1 1.093 0l7.181 7.181 7.18-7.18a.773.773 0 1 1 1.094 1.092L12.593 11.5l7.18 7.18a.773.773 0 0 1-1.092 1.094L11.5 12.593l-7.18 7.18a.773.773 0 0 1-1.094-1.092l7.181-7.181-7.18-7.18a.773.773 0 0 1 0-1.094Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgClose;
