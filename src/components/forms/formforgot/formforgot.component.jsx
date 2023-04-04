import React, { useState } from "react";
import { Row, Col, Form } from "antd";

import InputForm from "../../form-items/inputform/inputform.component";
import ResetPasswordTXT from "../../forgot-password-items/resetpasswordtxt/resetpasswordtxt.component";
import OpenNotification from "../../form-items/notification/notification.component";
import "./formforgot.styles.scss";
import axios from "axios";
import Navigation from "../../generals-items/navigation/navigation.component";
import { useDispatch } from "react-redux";
import { UserLogOut } from "../../../redux/login_redux/loginAction";
// steps for registering proccess
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
  const dispatch = useDispatch();
  // getiing email for get user question
  const [inputs, setInputs] = useState({
    email: "",
  });

  // check for email input is empty
  const [emptyEmail, setEmtyEmail] = useState(false);

  // validation for email
  function isValidEmail(email) {
    const a = /\S+@\S+\.\S+/.test(email);
    console.log(a);
    return /\S+@\S+\.\S+/.test(email);
  }

  // getting info from inputs & for inputs to not to be empty
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    inputs.email !== "" && setEmtyEmail(false);
  };
  // submit the email to API
  const handleSubmit = (event) => {
    event.preventDefault();

    // check the email to not to be empty
    console.log("inputs.email.trim:", inputs.email.trim());
    if (inputs.email.trim() === "") {
      console.log("inputs.email.trim:", inputs.email.trim);
      setEmtyEmail(true);
    }
    if (inputs.email.trim() === "") {
      return;
    }
    // validation for email
    if (isValidEmail(inputs.email.trim()) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Dosn`t Valid", "", "error");
      return;
    }
    // Send info to register API
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
      (e) => {
        OpenNotification("topRight", "", e.response.data.msg, "error");
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
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
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <ResetPasswordTXT
            span={10}
            offset={7}
            title={"Reset password"}
            description={"Please enter your email address"}
          />
          {/* getting the email */}
          <InputForm
            span={10}
            offset={7}
            inputs={"email"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"Email"}
            empty={emptyEmail}
          />

          {/* navigate to next & pervius step in reset password proccess */}
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
