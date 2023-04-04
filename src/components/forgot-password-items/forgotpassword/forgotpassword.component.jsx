import { Col, Row } from "antd";
import React, { useState } from "react";

import SetNewPassword from "../../forgot-password-items/setnewpassword/setnewpassword.component";
import FormForgot from "../../forms/formforgot/formforgot.component";
import StepForgotPassword from "../../register-items/registrationforgotpassword/registrationforgotpassword.component";
import FormForgotPassword from "../../forms/forgotpasswordform/forgotpasswordform.component";

import LoginBG from "../../../assets/login-bg.webp";

import "./forgotpassword.styles.scss";

const ForgotPassword = () => {
  // getting info for forgottpassword & change password
  const [inputs, setInputs] = useState({
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
    password: "",
    repeatPassword: "",
    token: "",
  });

  // current step for forgottpassword
  const [current, setCurrent] = useState(0);

  // go to next step for forgottpassword
  const next = (email, data) => {
    console.log(data[0].title);
    setInputs({
      email: email,
      question1: data[0].title,
      question2: data[1].title,
      question3: data[2].title,
    });
    setCurrent(current + 1);
  }; // go to next step for forgottpassword
  const next_2 = (token) => {
    console.log(token);
    setInputs({
      token: token,
    });
    setCurrent(current + 1);
  };
  // go to previus step for forgottpassword
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    // background image for login page
    <Row
      className="login_bg forgot_container"
      justify="space-around"
      align="middle"
      style={{
        background: `url(${LoginBG})`,
      }}
    >
      <Col className="login_bg_container">
        {/* steps for changepassword proccess */}
        <StepForgotPassword current={current} />
        <Row className="main_container_form">
          <Col span={24}>
            {current === 0 && (
              <FormForgot
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
              />
            )}
            {current === 1 && (
              // forggotpassword form
              <FormForgotPassword
                shouldUpdate
                current={current}
                next_2={next_2}
                next={next}
                prev={prev}
                email={inputs.email}
                question1={inputs.question1}
                question2={inputs.question2}
                question3={inputs.question3}
              />
            )}
            {current === 2 && (
              // set new password form
              <SetNewPassword
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
                token={inputs.token}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
