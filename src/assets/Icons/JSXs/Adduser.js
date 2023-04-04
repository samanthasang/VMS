import * as React from "react";

const SvgAdduser = ({ title, titleId, ...props }) => (
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
      d="M11.786 10.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm0 1a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-5.222 2.627c1.425-1.005 3.382-1.306 5.829-1.306a.5.5 0 1 1 0 1c-2.41 0-4.096.307-5.252 1.123-1.129.797-1.85 2.154-2.145 4.51a.5.5 0 1 1-.992-.123c.312-2.5 1.11-4.18 2.56-5.204Zm10.579-.806a.5.5 0 0 0-1 0v3.143H13a.5.5 0 1 0 0 1h3.143v3.143a.5.5 0 1 0 1 0v-3.143h3.143a.5.5 0 1 0 0-1h-3.143v-3.143Z"
      fill="#EEE"
    />
  </svg>
);

export default SvgAdduser;
