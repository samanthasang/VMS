import * as React from "react";

const SvgManualLoginDefault = ({ title, titleId, ...props }) => (
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
      d="M21 20a1 1 0 0 1-1 1h-5.248a.5.5 0 1 1 0-1H20V3.755h-5.248a.5.5 0 1 1 0-1H20a1 1 0 0 1 1 1V20ZM9.216 14.677v1.976c0 .888-1.072 1.336-1.703.71l-4.825-4.775a1 1 0 0 1 0-1.421l4.825-4.775c.631-.625 1.703-.178 1.703.71v1.976h6.76a1 1 0 0 1 1 1v3.599a1 1 0 0 1-1 1h-6.76Zm0-1h6.76v-3.599h-6.76v.075h-1v-3.05l-4.825 4.775 4.825 4.775v-3.05h1v.074Z"
      fill="#ECEDEF"
    />
  </svg>
);

export default SvgManualLoginDefault;
