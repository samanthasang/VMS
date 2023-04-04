import * as React from "react";

const Svg4X = ({ title, titleId, ...props }) => (
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
      d="M4 15.3v-1.067L8.94 6h1.666v8h1.393v1.3h-1.393V18H9.342v-2.7H4Zm5.385-7.9L5.522 14h3.863V7.4ZM17.927 12.233 20.986 18H19.55l-2.427-4.55L14.839 18h-1.45l3.073-5.783-3.073-5.767h1.45l2.427 4.567L19.55 6.45H21l-3.073 5.783Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default Svg4X;
