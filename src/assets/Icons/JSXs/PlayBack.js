import * as React from "react";

const SvgPlayBack = ({ title, titleId, ...props }) => (
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
      d="M1 2a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Zm2 1v11h18V3H3Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.528 5.618a1 1 0 0 1 1.027.05l3 2a1 1 0 0 1 0 1.664l-3 2A1 1 0 0 1 10 10.5v-4a1 1 0 0 1 .528-.882ZM12 8.368v.263l.197-.131L12 8.369ZM7 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-1.768-1.268a2.5 2.5 0 0 1 4.06.768H21a1 1 0 1 1 0 2H9.291a2.5 2.5 0 0 1-4.582 0H3a1 1 0 1 1 0-2h1.709a2.5 2.5 0 0 1 .523-.768Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgPlayBack;
