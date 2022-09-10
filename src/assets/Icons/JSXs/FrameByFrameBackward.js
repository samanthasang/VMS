import * as React from "react";

const SvgFrameByFrameBackward = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 14C2.5 7.649 7.649 2.5 14 2.5S25.5 7.649 25.5 14 20.351 25.5 14 25.5 2.5 20.351 2.5 14Zm-1 0C1.5 7.096 7.096 1.5 14 1.5S26.5 7.096 26.5 14 20.904 26.5 14 26.5 1.5 20.904 1.5 14Zm9.5 4a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v3.475l6.518-3.42a.5.5 0 0 1 .732.442v7.006a.5.5 0 0 1-.732.443L11.5 14.025V17.5a.5.5 0 0 1-.5.5Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgFrameByFrameBackward;
