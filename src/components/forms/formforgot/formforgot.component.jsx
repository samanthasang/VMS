import React, { useState } from "react";
import { Row, Col, Form, Button } from "antd";

import InputForm from "../../form-items/inputform/inputform.component";
import ResetPasswordTXT from "../../forgot-password-items/resetpasswordtxt/resetpasswordtxt.component";
import OpenNotification from "../../form-items/notification/notification.component";
import "./formforgot.styles.scss";
import axios from "axios";
import Navigation from "../../generals-items/navigation/navigation.component";
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

    console.log("inputs.email.trim:", inputs.email.trim());
    if (inputs.email.trim() === "") {
      console.log("inputs.email.trim:", inputs.email.trim);
      setEmtyEmail(true);
    }
    if (inputs.email.trim() === "") {
      return;
    }
    if (isValidEmail(inputs.email.trim()) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Dosn`t Valid", "", "error");
      return;
    }
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/get-questions",
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
    <Row className="main_register_container">
      <Col className="form_register" span={24}>
        <Form
          labelCol={{
            span: 8,
          }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
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

          <Navigation
            steps={steps}
            current={current}
            form={form}
            handleSubmit={handleSubmit}
            next={next}
            prev={prev}
          />
        </Form>
      </Col>
    </Row>
  );
};

export default FormForgot;
