import * as React from "react";

const SvgTimeClip = ({ title, titleId, ...props }) => (
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
      d="M2.728 4.315a1 1 0 1 0-1.456 1.37l7.684 8.165a3.587 3.587 0 1 0 2.329 1.835c.277.04.56.02.832-.057a3.587 3.587 0 1 0 1.967-1.68l7.777-8.263a1 1 0 0 0-1.457-1.37l-8.838 9.39-8.838-9.39Zm5.37 15.107a2.087 2.087 0 1 0 0-4.175 2.087 2.087 0 0 0 0 4.175Zm7.175 0a2.087 2.087 0 1 0 0-4.175 2.087 2.087 0 0 0 0 4.175Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgTimeClip;
