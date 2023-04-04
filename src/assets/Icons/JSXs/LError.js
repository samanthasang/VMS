import * as React from "react";

const SvgLError = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.637 4.838a1.667 1.667 0 0 1 2.81 0l18.077 28.33c.708 1.109-.09 2.562-1.405 2.562H1.964c-1.316 0-2.113-1.453-1.405-2.563L18.637 4.838Zm-.918 11.077c0-.92.746-1.667 1.667-1.667h1.311c.92 0 1.667.746 1.667 1.667v9.44c0 .92-.746 1.666-1.667 1.666h-1.311c-.92 0-1.667-.746-1.667-1.666v-9.44Zm1.667 12.268c-.92 0-1.667.746-1.667 1.666v1.311c0 .921.746 1.667 1.667 1.667h1.311c.92 0 1.667-.746 1.667-1.666v-1.312c0-.92-.746-1.666-1.667-1.666h-1.311Z"
      fill="#FF8225"
    />
  </svg>
);

export default SvgLError;
