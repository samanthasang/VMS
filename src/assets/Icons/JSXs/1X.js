import * as React from "react";

const Svg1X = ({ title, titleId, ...props }) => (
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
      d="M4.38 5.6v-.83h1.88V12h-.92V5.6h-.96Zm6.593 2.92 2.14 3.48h-1.03l-1.67-2.72L8.823 12h-1.01l2.13-3.48-2.14-3.49h1.02l1.68 2.73 1.6-2.73h1.02l-2.15 3.49Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default Svg1X;
