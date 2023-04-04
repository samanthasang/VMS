import * as React from "react";

const SvgFrameByFrameBackward = ({ title, titleId, ...props }) => (
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
      d="M8.5 7.5c.5 0 .5.5.5.5v4l.387-.245.386-.245.773-.49 1.546-.981 3.092-1.962a.539.539 0 0 1 .816.467v6.912a.538.538 0 0 1-.816.466L9 12v3.999s0 .501-.5.501S8 16 8 16V8s0-.5.5-.5Z"
      fill="#EFEFEF"
    />
    <path
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM2.044 12c0 5.499 4.457 9.956 9.956 9.956S21.956 17.5 21.956 12 17.5 2.044 12 2.044 2.044 6.5 2.044 12Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgFrameByFrameBackward;
