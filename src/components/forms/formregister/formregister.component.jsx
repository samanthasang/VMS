import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "antd";

import InputForm from "../../form-items/inputform/inputform.component";
import InputPasswordForm from "../../form-items/inputpasswordform/inputpasswordform.component";
import OpenNotification from "../../form-items/notification/notification.component";

import checkPasswordStrength from "check-password-strength";

import "./formregister.styles.scss";
import axios from "axios";
import Navigation from "../../generals-items/navigation/navigation.component";
// steps for registering proccess
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

const FormRegister = ({ current, next, prev, form }) => {
  // getiing first name & last name & email & password for register user
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  // check for email input is empty
  const [passwordTittle, setPasswordTittle] = useState(false);
  // check for firtname input is empty
  const [emptyFirstName, setEmtyFirstName] = useState(false);
  // check for lastname input is empty
  const [emptyLastName, setEmtyLastName] = useState(false);
  // check for email input is empty
  const [emptyEmail, setEmtyEmail] = useState(false);
  // check for password input is empty
  const [emptyPassword, setEmtyPassword] = useState(false);
  // check for repeatpassword input is empty
  const [emptyRepeatPassword, setEmtyRepeatPassword] = useState(false);
  // check the strenght for password
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    // check the strenght for password
    inputs.password === ""
      ? setStrength({ id: 15 })
      : setStrength(checkPasswordStrength.passwordStrength(inputs.password));
  }, [inputs.password]);

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

  // submit the firstName & lastName & email & password & repeatPassword to API
  const handleSubmit = (event) => {
    event.preventDefault();
    // check the answers to not to be empty
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
    // check the answers to not to be empty
    if (
      inputs.firstName === "" ||
      inputs.lastName === "" ||
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.repeatPassword === ""
    ) {
      return;
    }
    console.log(isValidEmail(inputs.email));
    // validation for email
    if (isValidEmail(inputs.email) === false) {
      setEmtyEmail(true);
      OpenNotification("topRight", "Email Isn`t Valid", "", "error");
      return;
    }

    // check the strenght for password
    if (inputs.password.length < 8) {
      setEmtyPassword(true);
      setInputs({ ...inputs, password: "" });
      OpenNotification("topRight", "Password is too Short", "", "error");
      return;
    }
    // check for password & repeatpwssword to be the same
    if (inputs.password !== inputs.repeatPassword) {
      setPasswordTittle(true);
      setEmtyPassword(true);
      setEmtyRepeatPassword(true);
      setInputs({ ...inputs, password: "" });
      OpenNotification("topRight", "Password Dosn`t Match", "", "error");
      return;
    }

    console.log("firstName:", inputs.firstName);
    console.log("lastName:", inputs.lastName);
    console.log("email:", inputs.email);
    console.log("password:", inputs.password);
    console.log("repeatPassword:", inputs.repeatPassword);
    // Send info to register API
    axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/register/personal",
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
        response.data.ok && next(inputs.email);
      },
      (e) => {
        e.response.status === 422 &&
          (e.response.data.data.errors.email
            ? OpenNotification(
                "topRight",
                "",
                e.response.data.data.errors.email,
                "error"
              )
            : OpenNotification(
                "topRight",
                "",
                e.response.data.data.errors.password,
                "error"
              ));

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
          {/* getting the firstName */}
          <InputForm
            span={10}
            offset={7}
            inputs={"firstName"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"First name"}
            empty={emptyFirstName}
          />
          {/* getting the lastName */}
          <InputForm
            span={10}
            offset={7}
            inputs={"lastName"}
            handleChange={handleChange}
            type={"text"}
            placeholder={"Last name"}
            empty={emptyLastName}
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
          {/* getting the password */}
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"password"}
            handleChange={handleChange}
            type={"password"}
            placeholder={"Password"}
            empty={emptyPassword}
            tittle={passwordTittle}
          />
          {/* check the strenght for password */}

          <Col id="color-indicators" span={10} offset={7}>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span className={`valid${strength.id}`}></span>
            <span>{strength.value}</span>
          </Col>
          {/* getting the repeatPassword */}
          <InputPasswordForm
            span={10}
            offset={7}
            inputs={"repeatPassword"}
            handleChange={handleChange}
            type={"password"}
            placeholder={"Confirm password"}
            empty={emptyRepeatPassword}
            tittle={passwordTittle}
          />
          {/* navigate to next & pervius step in register proccess */}
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

export default FormRegister;
