import * as React from "react";

const SvgUserwhite = ({ title, titleId, ...props }) => (
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
      d="M12.138 12.283a4.142 4.142 0 1 0 0-8.283 4.142 4.142 0 0 0 0 8.283Zm5.916 2.959c-2.367-2.367-9.466-2.367-11.833 0-1.221 1.221-1.253 3.824-1.21 4.873.01.257.223.451.48.451h13.287c.26 0 .475-.197.483-.457.031-1.06-.02-3.681-1.207-4.868Z"
      fill="#EEE"
    />
  </svg>
);

export default SvgUserwhite;
