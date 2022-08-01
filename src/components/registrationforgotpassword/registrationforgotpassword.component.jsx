import React, { useState } from "react";
import { Row, Col, Steps } from "antd";

import "./registrationforgotpassword.styles.scss";
import Register from "../register/register.component";

import Step11 from "../../assets/Step1-1.svg";
import Step110 from "../../assets/Step22-1.svg";
const { Step } = Steps;
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  }
];

const StepForgotPassword = ({current, ChangeCurrent, next, prev}) => {
  return (
    <>
      <Row span={16}>
        <Col
          span={24}
          style={{
            border: "none",
            background: "transparent",
            margin: "0",
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100px",
            alignItems: "center",
          }}
        >
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
                background:
                  current === 0
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="process"
              title="Registration"
            />
            <Step
              className="registerration_middle"
              style={{
                background:
                  current === 1
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="wait"
              title="Password Protection"
            />
            <Step
              className="registerration_right"
              style={{
                background:
                  current === 2
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="wait"
              title="Reset Password Protection"
            />
          </Steps>
        </Col>
      </Row>
    </>
  );
};

export default StepForgotPassword;
