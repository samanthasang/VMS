import * as React from "react";

const SvgVolume0 = ({ title, titleId, ...props }) => (
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
      d="M11.59 2.118c.076-.03.203-.07.283-.085.303-.065.54-.035.83.104.324.157.56.457.679.878.042.146.045.46.052 8.717.005 6.094 0 8.63-.02 8.79-.084.742-.439 1.227-.998 1.37-.377.096-.821-.018-1.223-.314-.09-.064-1.392-1.325-2.892-2.795-1.5-1.473-2.751-2.689-2.78-2.703-.035-.018-.526-.025-1.657-.025-1.785 0-1.796-.002-2.107-.153-.207-.1-.451-.319-.564-.501a2.025 2.025 0 0 1-.137-.294L1 14.941v-2.976c0-2.657.005-2.99.038-3.103a1.44 1.44 0 0 1 .738-.848c.11-.051.256-.104.324-.118.083-.016.663-.026 1.733-.026 1.075 0 1.63-.009 1.674-.025.038-.014 1.284-1.218 2.83-2.735 2.9-2.848 2.908-2.853 3.253-2.992Zm.896 1.121c-.042-.159-.106-.256-.2-.305-.131-.067-.348-.018-.536.118a332.47 332.47 0 0 0-3.056 2.969c-2.453 2.4-2.975 2.922-3.02 3.017l-.054.116v2.797c0 2.608.003 2.805.04 2.902.036.088.513.566 3.045 3.051 2.225 2.183 3.04 2.97 3.137 3.025.141.08.266.11.357.087.097-.023.203-.152.259-.314l.052-.15.007-8.587c.004-7.611 0-8.605-.03-8.726ZM4.67 9.65c-.01-.55-.013-.664.027-.83.006-.02-.021-.02-.293-.017-.162.001-.412.003-.793.002-.64-.002-1.213.005-1.272.014-.155.026-.247.081-.322.19l-.064.097v5.715l.064.095a.464.464 0 0 0 .164.143c.101.049.13.049 1.352.049h1.164c-.016-.053-.014-.192-.01-.622a155.508 155.508 0 0 0-.017-4.836Z"
      fill="#EFEFEF"
    />
    <path
      d="M17.094 7.96a.5.5 0 0 0-.76.651l2.865 3.341-2.864 3.342a.5.5 0 0 0 .759.65l2.763-3.223 2.763 3.223a.5.5 0 0 0 .76-.65l-2.864-3.342 2.864-3.34a.5.5 0 0 0-.76-.652l-2.763 3.224-2.763-3.224Z"
      fill="#EFEFEF"
    />
  </svg>
);

export default SvgVolume0;
