import React, { useState } from "react";
import { Button, message, Steps } from "antd";

import "./registration.styles.scss";
import Register from "../register/register.component";

import Step11 from "../../assets/Step1-1.svg";
import Step110 from "../../assets/Step22-1.svg";
const { Step } = Steps;const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  }
];

const Registration = ({current, ChangeCurrent, next, prev}) => {
  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={ChangeCurrent}
        className="site-navigation-steps"
      >
        <Step
          className="registerration_left"
          style={{
            background: current === 0 ? `url(${Step11}) 100%` : `url(${Step110}) 100%`,
          }}
          status="process"
          title="Registration"
        />
        <Step
          className="registerration_right"
          style={{
            background: current === 1 ? `url(${Step11}) 100%` : `url(${Step110}) 100%`,
          }}
          status="wait"
          title="Password Protection"
        />
      </Steps>
    </>
  );
};

export default Registration;
