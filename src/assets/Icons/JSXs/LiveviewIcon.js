import * as React from "react";

const SvgLiveviewIcon = ({ title, titleId, ...props }) => (
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
      d="M1 7.6c0-.69.29-1.35.805-1.838A2.833 2.833 0 0 1 3.75 5h10.313c.666 0 1.31.229 1.812.645.502.415.827.99.914 1.614l4.276-1.796a1.445 1.445 0 0 1 1.308.097c.193.118.35.28.46.47.11.19.167.403.167.62v9.7c0 .217-.058.43-.167.62-.11.19-.267.352-.46.47a1.445 1.445 0 0 1-1.307.098L16.79 15.74a2.561 2.561 0 0 1-.914 1.614 2.844 2.844 0 0 1-1.813.645H3.75c-.73 0-1.429-.274-1.945-.762A2.53 2.53 0 0 1 1 15.4V7.6Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgLiveviewIcon;
