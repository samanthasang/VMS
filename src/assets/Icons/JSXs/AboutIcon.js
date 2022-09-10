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
      d="M12 1C5.928 1 1 5.928 1 12s4.928 11 11 11 11-4.928 11-11S18.072 1 12 1Zm1.1 18.7h-2.2v-2.2h2.2v2.2Zm2.277-8.525-.99 1.012c-.792.803-1.287 1.463-1.287 3.113h-2.2v-.55c0-1.21.495-2.31 1.287-3.113l1.364-1.386A2.15 2.15 0 0 0 14.2 8.7c0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2H7.6c0-2.431 1.969-4.4 4.4-4.4s4.4 1.969 4.4 4.4a3.5 3.5 0 0 1-1.023 2.475Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgAboutIcon;
