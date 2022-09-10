import * as React from "react";

const SvgFrameByFrameForward = ({ title, titleId, ...props }) => (
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
      d="M25.5 14c0 6.351-5.149 11.5-11.5 11.5S2.5 20.351 2.5 14 7.649 2.5 14 2.5 25.5 7.649 25.5 14Zm1 0c0 6.904-5.596 12.5-12.5 12.5S1.5 20.904 1.5 14 7.096 1.5 14 1.5 26.5 7.096 26.5 14ZM17 10a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-3.475l-6.518 3.42a.5.5 0 0 1-.732-.442v-7.006a.5.5 0 0 1 .732-.443l6.518 3.421V10.5a.5.5 0 0 1 .5-.5Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgFrameByFrameForward;
