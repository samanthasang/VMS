import * as React from "react";

const SvgZoomOut = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.148 18.148a.75.75 0 0 1 1.06 0l4.822 4.822a.75.75 0 1 1-1.06 1.06l-4.822-4.821a.75.75 0 0 1 0-1.06Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.446 20.393a8.947 8.947 0 1 0 0-17.893 8.947 8.947 0 0 0 0 17.893Zm0 1.5c5.77 0 10.447-4.677 10.447-10.447C21.893 5.677 17.216 1 11.446 1 5.677 1 1 5.677 1 11.446c0 5.77 4.677 10.447 10.446 10.447Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.75 11.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgZoomOut;
