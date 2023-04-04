import * as React from "react";

const Svg8X = ({ title, titleId, ...props }) => (
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
      d="M3.293 9.047a2.9 2.9 0 0 1 .417-1.54c.277-.466.689-.833 1.234-1.103S6.147 6 6.919 6c.781 0 1.445.135 1.99.404.545.27.951.637 1.218 1.104.278.466.417.984.417 1.554 0 .601-.154 1.13-.463 1.586-.308.445-.71.777-1.203.995a2.76 2.76 0 0 1 1.42 1.072c.36.508.539 1.12.539 1.834 0 .694-.165 1.306-.494 1.834a3.22 3.22 0 0 1-1.388 1.197c-.586.28-1.265.42-2.036.42-.772 0-1.456-.14-2.052-.42a3.237 3.237 0 0 1-1.373-1.197C3.164 15.855 3 15.243 3 14.55c0-.715.18-1.326.54-1.834.36-.518.838-.876 1.435-1.072a3.033 3.033 0 0 1-1.234-1.026c-.299-.436-.448-.959-.448-1.57Zm1.327.155c0 .56.21 1.026.632 1.399.432.363.988.544 1.667.544.678 0 1.229-.181 1.65-.544.432-.373.648-.84.648-1.399 0-.642-.206-1.135-.617-1.477-.401-.352-.962-.528-1.681-.528-.71 0-1.27.176-1.682.528-.411.342-.617.835-.617 1.477Zm-.293 5.316c0 .694.231 1.249.694 1.663.473.415 1.106.622 1.898.622.791 0 1.419-.207 1.882-.622.462-.425.694-.979.694-1.663 0-.746-.237-1.306-.71-1.679-.473-.383-1.095-.575-1.866-.575-.762 0-1.384.192-1.867.575-.484.373-.725.933-.725 1.68ZM17.699 12.31l3.286 5.38h-1.543l-2.607-4.244-2.453 4.243h-1.559l3.302-5.394-3.302-5.378h1.559l2.607 4.26 2.453-4.26H21l-3.301 5.394Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default Svg8X;
