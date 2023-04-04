import * as React from "react";

const Svg1X = ({ title, titleId, ...props }) => (
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
      d="M5 7.369V6h2.77v12H6.328V7.369H5ZM15.534 12.152 18.984 18h-1.62l-2.738-4.614L12.052 18h-1.636l3.466-5.865-3.466-5.848h1.636l2.737 4.631 2.576-4.63H19l-3.466 5.864Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default Svg1X;
