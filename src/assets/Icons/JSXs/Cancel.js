import * as React from "react";

const SvgCancel = ({ title, titleId, ...props }) => (
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
      d="M16.312 7.904a.393.393 0 0 1 0 .555l-3.649 3.649 3.649 3.648a.393.393 0 0 1-.556.556l-3.648-3.649-3.649 3.649a.393.393 0 0 1-.555-.556l3.649-3.648-3.649-3.649a.393.393 0 1 1 .555-.555l3.649 3.649 3.649-3.65a.393.393 0 0 1 .555 0Z"
      fill="#EFEFEF"
      stroke="#EFEFEF"
      strokeWidth={0.5}
      strokeLinecap="round"
    />
    <path
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM3.47 12a8.53 8.53 0 1 0 17.06 0 8.53 8.53 0 0 0-17.06 0Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgCancel;
