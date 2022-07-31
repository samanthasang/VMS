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
            background: `url(${Step11})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            left: "0",
            width: "52%",
            backgroundSize: "100%",
            zIndex: "2",
            height: '50px'
          }}
          status="process"
          title="Registration"
        />
        <Step
          className="registerration_right"
          style={{
            background: `url(${Step110})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            right: "0",
            width: "52%",
            backgroundSize: "100%",
            zIndex: "1",
            height: '50px'
          }}
          status="wait"
          title="Password Protection"
        />
      </Steps>
    </>
  );
};

export default Registration;
