import * as React from "react";

const SvgAccept = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask id="Accept_svg__a" fill="#fff">
      <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Z" />
    </mask>
    <path
      d="M19 10a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-2Zm-9 9a9 9 0 0 1-9-9h-2c0 6.075 4.925 11 11 11v-2Zm-9-9a9 9 0 0 1 9-9v-2C3.925-1-1 3.925-1 10h2Zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11v2Z"
      fill="#3CBB5F"
      mask="url(#Accept_svg__a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.582 4.583c.643.316.607.89.283 1.588l-3.99 8.598a1.795 1.795 0 0 1-3.154.23l-2.495-3.855c-.417-.644-.645-1.56.189-1.977.321-.161.833-.228 1.25.416l2.5 3.75 3.75-7.916c.416-.834.928-1.196 1.667-.834Z"
      fill="#3CBB5F"
    />
  </svg>
);

export default SvgAccept;
