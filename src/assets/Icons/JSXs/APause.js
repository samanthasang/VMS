import * as React from "react";

const SvgAPause = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.5 16c0 8.008-6.492 14.5-14.5 14.5S1.5 24.008 1.5 16 7.992 1.5 16 1.5 30.5 7.992 30.5 16Zm1 0c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16ZM13.75 9.8a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgAPause;
