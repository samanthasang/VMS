import * as React from "react";

const Svg1D4X = ({ title, titleId, ...props }) => (
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
      d="M.624 8.452V7.48h2.052V16H1.608V8.452H.624ZM8.353 14.056v-.768l4.128-5.928h1.392v5.76h1.164v.936h-1.164V16h-1.056v-1.944H8.353Zm4.5-5.688L9.625 13.12h3.228V8.368ZM19.99 11.848 22.548 16h-1.2l-2.028-3.276L17.41 16h-1.212l2.568-4.164-2.568-4.152h1.212l2.028 3.288 1.908-3.288h1.212l-2.568 4.164Z"
      fill="#EFEFEF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.52 7.487-2.574 9.006-1.154-.33 2.575-9.006 1.154.33Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default Svg1D4X;
