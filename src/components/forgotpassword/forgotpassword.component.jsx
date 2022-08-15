import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import SetNewPassword from "../setnewpassword/setnewpassword.component";
import RegistrationNavigation from "../registerationnavigation/registerationnavigation.component";
import FormForgot from "../forms/formforgot/formforgot.component";
import StepForgotPassword from "../registrationforgotpassword/registrationforgotpassword.component";
import FormForgotPassword from "../forgotpasswordform/forgotpasswordform.component";
import ResetPasswordNavigation from "../resetpasswordnavigation/resetpasswordnavigation.component";
import OpenNotification from "../notification/notification.component";

import LoginBG from "../../assets/login-bg.jpg";
import LoginFormBG from "../../assets/login-form-bg.svg";

import "./forgotpassword.styles.scss";

const { Meta } = Card;
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

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
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
    token: ""
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
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
  }
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
        span={14}
        style={{
          height: "66vh",
          background: `url(${LoginFormBG})`,
          backdropFilter: "blur(100px)",
        }}
      >
        <StepForgotPassword
          current={current}
          ChangeCurrent={onChange}
          next={next}
          prev={prev}
        />
        <Row>
          <Col
            span={24}
            style={{
              width: "100%",
              margin: "0",
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
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
        {/* <ResetPasswordNavigation
          shouldUpdate
          current={current}
          next={next}
          prev={prev}
          form={form}
        /> */}
      </Col>
    </Row>
  );
};

export default ForgotPassword;
