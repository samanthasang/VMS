import * as React from "react";

const SvgDownload = ({ title, titleId, ...props }) => (
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
      d="M9.1 2.5a.5.5 0 0 1 .5-.5h3.617a.5.5 0 0 1 .5.5v8.045a.5.5 0 0 0 .5.5h2.431a.5.5 0 0 1 .36.847l-5.222 5.427a.5.5 0 0 1-.72 0l-5.222-5.427a.5.5 0 0 1 .36-.847h2.395a.5.5 0 0 0 .5-.5V2.5Zm4.617 9.57c1.158-.025.332-.025.36-.025h.221a.5.5 0 0 1 .36.847l-2.872 2.985a.5.5 0 0 1-.72 0l-2.872-2.985a.5.5 0 0 1 .36-.847h.494S9.5 12.09 9.5 12c0 .028-.1.045 0 .045.276 0 .6-.12.6-.397V3.5a.5.5 0 0 1 .5-.5h1.617a.5.5 0 0 1 .5.5v8.148c0 .276.19.422.467.422h.533ZM2 20.5c0 .5.448.59 1 .59h17.09c.552 0 .91-.09.91-.59s-.91-.41-.91-.41H3S2 20 2 20.5Z"
      fill="#EFEFEF"
      stroke="#EFEFEF"
      strokeWidth={0.3}
    />
  </svg>
);

export default SvgDownload;
