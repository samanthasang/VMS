import React, { useState } from "react";
import { Button, message, Steps } from "antd";

import "./registerationnavigation.styles.scss";
import Register from "../register/register.component";

import Step11 from "../../assets/Step1-1.svg";
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

const RegistrationNavigation = ({ current, next, prev }) => {
  return (
    <>
      <div className="steps-action">
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={prev}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default RegistrationNavigation;
