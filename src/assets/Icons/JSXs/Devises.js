import * as React from "react";

const SvgDevises = ({ title, titleId, ...props }) => (
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
      d="M20.19 7.008 6.086 1.093a1.217 1.217 0 0 0-.89-.017 1.165 1.165 0 0 0-.38.234c-.11.102-.197.223-.257.356l-3.464 7.7c-.121.269-.125.571-.011.842.113.271.335.488.617.603l8.034 3.279-1.432 3.41H3.31v-3.3H1V23h2.31v-3.3h4.992c.95 0 1.792-.543 2.143-1.384l1.411-3.36 3.949 1.612c.28.115.596.12.88.013.284-.107.511-.316.634-.583l3.464-7.542c.123-.267.13-.57.018-.84a1.126 1.126 0 0 0-.61-.608Zm.593 8.99c-.603.082-2.986-1.041-2.986-1.041l2.394-5.212s2.328.605 2.75 1.066c.422.46-1.555 5.106-2.158 5.187Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgDevises;
