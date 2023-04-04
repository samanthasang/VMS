import * as React from "react";

const SvgUserName = ({ title, titleId, ...props }) => (
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
    <ellipse cx={11.97} cy={8.042} rx={5.235} ry={5.375} fill="#EFEFEF" />
    <path fill="#EFEFEF" d="M10.225 11.625h3.49v7.167h-3.49z" />
    <path
      d="M4.99 15.958c3.256-1.101 10.468-.893 13.96 0 3.492.894 4.146 2.133 3.49 5.375H1.5c-.565-3.117.235-4.273 3.49-5.375Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgUserName;
