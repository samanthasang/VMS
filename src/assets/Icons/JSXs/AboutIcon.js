import * as React from "react";

const SvgAboutIcon = ({ title, titleId, ...props }) => (
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
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4.286a1.072 1.072 0 1 1 0 2.143 1.072 1.072 0 0 1 0-2.143Zm2.857 11.518H9.143v-1.608h2.053V12.09H9.857v-1.607h2.947v5.714h2.053v1.608Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgAboutIcon;
