import * as React from "react";

const SvgManualLogoutDefault = ({ title, titleId, ...props }) => (
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
      d="M3 4a1 1 0 0 1 1-1h5.248a.5.5 0 0 1 0 1H4v16.245h5.248a.5.5 0 1 1 0 1H4a1 1 0 0 1-1-1V4Zm11.784 5.323V7.347c0-.888 1.072-1.336 1.703-.71l4.825 4.775a1 1 0 0 1 0 1.421l-4.825 4.775c-.631.625-1.703.178-1.703-.71v-1.976h-6.76a1 1 0 0 1-1-1v-3.599a1 1 0 0 1 1-1h6.76Zm0 1h-6.76v3.599h6.76v-.075h1v3.05l4.825-4.775-4.825-4.775v3.05h-1v-.074Z"
      fill="#ECEDEF"
    />
  </svg>
);

export default SvgManualLogoutDefault;
