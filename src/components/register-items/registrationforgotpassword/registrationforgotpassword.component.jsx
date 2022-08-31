import React from "react";
import { Row, Col, Steps } from "antd";

import "./registrationforgotpassword.styles.scss";

import Step11 from "../../../assets/Step2-2.svg";
import Step110 from "../../../assets/Step22-2.svg";
const { Step } = Steps;

const StepForgotPassword = ({ current, ChangeCurrent, next, prev }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={ChangeCurrent}
            className="site-navigation-steps"
          >
            <Step
              className="registerration_left_2"
              style={{
                background:
                  current === 0
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="process"
              title="Email"
            />
            <Step
              className="registerration_middle_2"
              style={{
                background:
                  current === 1
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="process"
              title="Validation"
            />
            <Step
              className="registerration_right_2"
              style={{
                background:
                  current === 2
                    ? `url(${Step11}) 100%`
                    : `url(${Step110}) 100%`,
              }}
              status="process"
              title="Password Reset"
            />
          </Steps>
        </Col>
      </Row>
    </>
  );
};

export default StepForgotPassword;
