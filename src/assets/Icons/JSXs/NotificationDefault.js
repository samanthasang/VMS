import * as React from "react";

const SvgNotificationDefault = ({ title, titleId, ...props }) => (
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
      d="m21 19.26-.205-.185a8.821 8.821 0 0 1-1.517-1.808 7.92 7.92 0 0 1-.815-2.967v-3.048a6.753 6.753 0 0 0-1.623-4.418A6.49 6.49 0 0 0 12.76 4.62v-.796a.833.833 0 0 0-.236-.583.798.798 0 0 0-1.14 0 .833.833 0 0 0-.237.583v.808a6.492 6.492 0 0 0-4.033 2.23 6.754 6.754 0 0 0-1.602 4.39V14.3a7.92 7.92 0 0 1-.816 2.967 8.843 8.843 0 0 1-1.492 1.808L3 19.26V21h18v-1.74ZM10 22a1.767 1.767 0 0 0 3.5 0H10Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgNotificationDefault;
