import * as React from "react";

const SvgUser = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.845 7.5c1.933 0 3.5-2.067 3.5-4a3.5 3.5 0 1 0-7 0c0 1.933 1.567 4 3.5 4Zm-2.603.757c-1.313-.284-2.123-.458-3.829.838-1.337 1.017-1.4 3.144-1.36 4.063a.464.464 0 0 0 .473.438h15.038c.254 0 .467-.191.475-.446.03-.929-.055-3.07-1.355-4.055-1.834-1.388-2.704-1.177-4-.863-.69.167-1.5.363-2.64.363-1.23 0-2.09-.185-2.802-.338Z"
      fill="#3D495D"
    />
  </svg>
);

export default SvgUser;
