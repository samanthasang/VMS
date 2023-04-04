import * as React from "react";

const SvgUserProfile = ({ title, titleId, ...props }) => (
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
      d="M12 6a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 6Z"
      fill="#EFEFEF"
    />
    <path
      d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.512 10.512 0 0 0 12 1.5Zm5.994 17.195A3.751 3.751 0 0 0 14.25 15h-4.5a3.752 3.752 0 0 0-3.744 3.695 9 9 0 1 1 11.988 0Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgUserProfile;
