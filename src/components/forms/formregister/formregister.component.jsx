import React, { useState } from "react";
import { Row, Col, Form, Steps, Button, Tooltip } from "antd";

import InputForm from "../../inputform/inputform.component";
import InputPasswordForm from "../../inputpasswordform/inputpasswordform.component";
import StrengthBar from "../../stregthbar/stregthbar.component";
import SubminBTN from "../../submitbtn/submitbtn.component";
import OpenNotification from "../../notification/notification.component";

import "./formregister.styles.scss";
import axios from "axios";
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

const FormRegister = ({ LoginAuth, current, next, prev, form }) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [passwordTittle, setPasswordTittle] = useState(false);
  const [emptyFirstName, setEmtyFirstName] = useState(false);
  const [emptyLastName, setEmtyLastName] = useState(false);
  const [emptyEmail, setEmtyEmail] = useState(false);
  const [emptyPassword, setEmtyPassword] = useState(false);
  const [emptyRepeatPassword, setEmtyRepeatPassword] = useState(false);

  function isValidEmail(email) {
    const a = /\S+@\S+\.\S+/.test(email);
    console.log(a);
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (inputs.firstName !== "") {
      setEmtyFirstName(false);
    }
    if (inputs.lastName !== "") {
      setEmtyLastName(false);
    }
    if (inputs.email !== "") {
      setEmtyEmail(false);
    }
    if (inputs.password !== "") {
      setEmtyPassword(false);
    }
    if (inputs.repeatPassword !== "") {
      setEmtyRepeatPassword(false);
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
    if (inputs.firstName === "") {
      setEmtyFirstName(true);
    }
    if (inputs.lastName === "") {
      setEmtyLastName(true);
    }
    if (inputs.email === "") {
      setEmtyEmail(true);
    }
    if (inputs.password === "") {
      setEmtyPassword(true);
    }
    if (inputs.repeatPassword === "") {
      setEmtyRepeatPassword(true);
    }
    if (
      inputs.firstName === "" ||
      inputs.lastName === "" ||
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.repeatPassword === ""
    ) {
      return;
    }
    if (inputs.password.length < 8) {
      setEmtyPassword(true);
      OpenNotification("topRight", "Password is too Short", "", "error");
      return;
    }
    if (inputs.password !== inputs.repeatPassword) {
      setPasswordTittle(true);
      setEmtyPassword(true);
      setEmtyRepeatPassword(true);
      OpenNotification("topRight", "Password Dosn`t Match", "", "error");
      return;
    }
    console.log(isValidEmail(inputs.email));
    if (isValidEmail(inputs.email) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Isn`t Valid", "", "error");
      return;
    }

    console.log("firstName:", inputs.firstName);
    console.log("lastName:", inputs.lastName);
    console.log("email:", inputs.email);
    console.log("password:", inputs.password);
    console.log("repeatPassword:", inputs.repeatPassword);
    axios({
      method: "post",
      url: process.env.REACT_APP_HHTP + "/api/auth/register/personal",
      data: {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        repeatPassword: inputs.repeatPassword,
      },
    }).then(
      (response) => {
        console.log(response.data.data);
        response.data.ok && next(inputs.email, response.data.data);
        next(inputs.email);
      },
      (error) => {
        OpenNotification(
          "topRight",
          "",
          error.response.data.data.errors.email,
          "error"
        );
        console.log(error);
      }
    );

    // if (inputs.username === "admin" || inputs.password === "admin")
    //   // navigate("/mainmenupage");
    //   LoginAuth();
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
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <InputForm
            span={10}
            offset={7}
            inputs={"firstName"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"First Name"}
            empty={emptyFirstName}
          />
          <InputForm
            span={10}
            offset={7}
            inputs={"lastName"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"Last Name"}
            empty={emptyLastName}
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
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={"password"}
            placeholder={"Password (alphabet and number)"}
            empty={emptyPassword}
            tittle={passwordTittle}
          />
          <StrengthBar
            minLength={1}
            password={inputs.password}
            span={10}
            offset={7}
          />
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"repeatPassword"}
            handleChange={handleChange}
            type={"password"}
            placeholder={"Confirm Password"}
            empty={emptyRepeatPassword}
            tittle={passwordTittle}
          />
          {/* <SubminBTN handleSubmit={handleSubmit} span={10} offset={7} /> */}

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

export default FormRegister;
