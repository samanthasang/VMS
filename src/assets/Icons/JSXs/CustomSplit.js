import * as React from "react";

const SvgCustomSplit = ({ title, titleId, ...props }) => (
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
      d="M3.364 1.636h15.272c.527 0 .955.367.955.819v13.09c0 .452-.428.819-.955.819H3.364c-.528 0-.955-.367-.955-.819V2.456c0-.452.427-.819.955-.819ZM.5 2.455C.5 1.099 1.782 0 3.364 0h15.272C20.218 0 21.5 1.099 21.5 2.455v13.09c0 1.356-1.282 2.455-2.864 2.455H3.364C1.782 18 .5 16.901.5 15.546V2.455Zm14.735 1.114a.506.506 0 0 0-.66-.001L5.904 11.29a.404.404 0 0 0-.132.234l-.285 1.678c-.043.253.175.48.461.48h2.2a.496.496 0 0 0 .33-.12l8.643-7.7a.388.388 0 0 0 .002-.591l-1.888-1.703Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgCustomSplit;
