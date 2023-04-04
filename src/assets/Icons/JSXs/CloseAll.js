import * as React from "react";

const SvgCloseAll = ({ title, titleId, ...props }) => (
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
      d="M7.654 5a2.5 2.5 0 0 1 2.5-2.5H20A2.5 2.5 0 0 1 22.5 5v9.846a2.5 2.5 0 0 1-2.5 2.5h-4.923v-1H20a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 20 3.5h-9.846a1.5 1.5 0 0 0-1.5 1.5v3.385h-1V5Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.846 8.615H4a1 1 0 0 0-1 1v9.847a1 1 0 0 0 1 1h9.846a1 1 0 0 0 1-1V9.615a1 1 0 0 0-1-1ZM4 7.615a2 2 0 0 0-2 2v9.847a2 2 0 0 0 2 2h9.846a2 2 0 0 0 2-2V9.615a2 2 0 0 0-2-2H4Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.082 11.582a.28.28 0 0 1 .396 0l2.599 2.6 2.6-2.6a.28.28 0 0 1 .395.395l-2.6 2.6 2.6 2.6a.28.28 0 1 1-.396.395l-2.6-2.6-2.598 2.6a.28.28 0 1 1-.396-.396l2.6-2.6-2.6-2.599a.28.28 0 0 1 0-.395Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgCloseAll;
