import React from "react";
import { Row, Col, Button, message, Steps } from "antd";

import "./registerationnavigation.styles.scss";
import Register from "../register/register.component";

import Step11 from "../../assets/Step1-1.svg";
import OpenNotification from "../../notification/notification.component";
const { Step } = Steps;
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
];

const RegistrationNavigation = ({ current, next, prev, form }) => {
  return (
    <>
      <Row>
        <Col className="navigation_registeration" span={24}>
          <div className="steps-action">
            {current > 0 && (
              <Button
                className="btn_pre"
                style={{
                  margin: "0 8px",
                }}
                onClick={prev}
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Back
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button className="btn_next" type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                className="btn_next"
                type="primary"
                onClick={() => OpenNotification("topRight")}
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Done
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RegistrationNavigation;
