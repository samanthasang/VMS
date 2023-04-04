import * as React from "react";

const SvgViewPage = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 2.25v3.375h-15V2.25h15Zm-15 4.725h4.167v8.775H1.5V6.975Zm15 0H7.333v8.775H16.5V6.975Z"
      fill="#A3AFC3"
    />
  </svg>
);

export default SvgViewPage;
