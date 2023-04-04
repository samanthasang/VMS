import * as React from "react";

const SvgAdd = ({ title, titleId, ...props }) => (
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
      d="M11.784 3.234c.312 0 .565.253.565.565v7.42h7.421a.565.565 0 1 1 0 1.13h-7.42v7.421a.565.565 0 1 1-1.13 0v-7.42H3.799a.565.565 0 1 1 0-1.13h7.42V3.799c0-.312.254-.565.565-.565Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgAdd;
