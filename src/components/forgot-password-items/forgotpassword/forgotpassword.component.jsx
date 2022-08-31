import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";

import SetNewPassword from "../../forgot-password-items/setnewpassword/setnewpassword.component";
import FormForgot from "../../forms/formforgot/formforgot.component";
import StepForgotPassword from "../../register-items/registrationforgotpassword/registrationforgotpassword.component";
import FormForgotPassword from "../../forms/forgotpasswordform/forgotpasswordform.component";

import LoginBG from "../../../assets/login-bg.webp";

import "./forgotpassword.styles.scss";

const ForgotPassword = () => {
  const [, forceUpdate] = useState({});
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

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const next = (email, data) => {
    console.log(data[0].title);
    setInputs({
      email: email,
      question1: data[0].title,
      question2: data[1].title,
      question3: data[2].title,
    });
    setCurrent(current + 1);
  };
  const next_2 = (token) => {
    console.log(token);
    setInputs({
      token: token,
    });
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Row
      className="login_bg"
      justify="space-around"
      align="middle"
      style={{
        height: "100vh",
        background: `url(${LoginBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backdropFilter: "blur(100px",
      }}
    >
      <Col
        style={{
          height: "520px",
          width: "930px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(70px)",
        }}
      >
        <StepForgotPassword
          current={current}
          // ChangeCurrent={onChange}
          // next={next}
          // prev={prev}
        />
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
