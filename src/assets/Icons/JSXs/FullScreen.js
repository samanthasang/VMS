import * as React from "react";

const SvgFullScreen = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.5 3.273V.818C.5.592.607.388.78.24.952.092 1.19 0 1.455 0h6.204v.818H4.317c-.442 0-.86.086-1.233.24l5.31 4.551a.738.738 0 0 1 0 1.157 1.07 1.07 0 0 1-1.35 0l-5.31-4.552c-.18.32-.28.68-.28 1.059v2.863H.5V3.273ZM14.34.818V0H20.547c.263 0 .502.092.674.24.173.148.28.352.28.578V6.136h-.954V3.273c0-.38-.1-.738-.28-1.059l-5.31 4.552a1.07 1.07 0 0 1-1.35 0 .738.738 0 0 1 0-1.157l5.31-4.552a3.253 3.253 0 0 0-1.234-.239H14.34Zm6.206 11.046h.954v5.318c0 .226-.107.43-.28.578-.172.148-.411.24-.674.24H14.34v-.818h3.341c.442 0 .86-.086 1.234-.24l-5.704-4.889a.738.738 0 0 1 0-1.157 1.07 1.07 0 0 1 1.35 0l5.704 4.89c.18-.32.28-.68.28-1.059v-2.863ZM7.659 17.182V18H1.455c-.264 0-.503-.092-.675-.24a.762.762 0 0 1-.28-.578V11.864h.955V14.729c0 .378.1.736.279 1.057l5.31-4.552a1.07 1.07 0 0 1 1.35 0 .738.738 0 0 1 0 1.157l-5.31 4.552c.373.153.792.239 1.234.239H7.66Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgFullScreen;
