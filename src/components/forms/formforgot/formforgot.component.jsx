import React, { useState } from "react";
import { Row, Col, Form, Steps, Button } from "antd";

import InputForm from "../../inputform/inputform.component";
import ResetPasswordTXT from "../../resetpasswordtxt/resetpasswordtxt.component";
import OpenNotification from "../../notification/notification.component";
import "./formforgot.styles.scss";
import axios from "axios";
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

const FormForgot = ({ LoginAuth, current, next, prev, form }) => {
  const [inputs, setInputs] = useState({
    email: "",
  });

  const [emptyEmail, setEmtyEmail] = useState(false);

  function isValidEmail(email) {
    const a = /\S+@\S+\.\S+/.test(email);
    console.log(a);
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (inputs.email !== "") {
      setEmtyEmail(false);
    }
  };
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
      // navigate("/mainmenupage");
      LoginAuth();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.email === "") {
      setEmtyEmail(true);
    }
    if (
      inputs.email === ""
    ) {
      return;
    }
    if (isValidEmail(inputs.email) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Dosn`t Valid", "", "error");
      return;
    }
    axios({
      method: "post",
      url: "http://192.168.1.32:8000/api/auth/get-questions",
      data: {
        email: `${inputs.email}`,
      },
    }).then(
      (response) => {
        console.log(response.data.data);
        response.data.ok && next(inputs.email, response.data.data);
      },
      (error) => {
          OpenNotification("topRight", "", error.response.data.msg, "error");
        console.log(error);
      }
    );
  };
  return (
    <Row>
      <Col
        className="form_forgot_1"
        span={24}
        style={{
          width: "100%",
          margin: "0",
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Form
          labelCol={{
            span: 8,
          }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <ResetPasswordTXT
            span={10}
            offset={7}
            title={"Reset Password"}
            description={"Please Enter Your Email Address"}
          />
          <InputForm
            span={10}
            offset={7}
            inputs={"email"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"Email"}
            empty={emptyEmail}
          />
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
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Back
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button
                    className="btn_next"
                    type="primary"
                    onClick={handleSubmit}
                  >
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
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Done
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default FormForgot;
