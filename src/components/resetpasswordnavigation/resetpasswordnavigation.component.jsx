import React from "react";
import { Row, Col, Button, notification, Steps } from "antd";

import "./resetpasswordnavigation.styles.scss";
import Register from "../register/register.component";
import OpenNotification from "../notification/notification.component";
import Step11 from "../../assets/Step1-1.svg";
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
  },
];

const ResetPasswordNavigation = ({ current, next, prev, form }) => {
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
                Previous
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

export default ResetPasswordNavigation;
