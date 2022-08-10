import React, { useState } from "react";
import { Row, Col, Form } from "antd";

import InputForm from "../../inputform/inputform.component";
import InputPasswordForm from "../../inputpasswordform/inputpasswordform.component";
import StrengthBar from "../../stregthbar/stregthbar.component";
import SubminBTN from "../../submitbtn/submitbtn.component";

import "./formregister.styles.scss";

const FormRegister = ({ LoginAuth }) => {
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
    if (inputs.password !== inputs.repeatPassword) {
      setPasswordTittle(true);
      setEmtyPassword(true);
      setEmtyRepeatPassword(true);
    }
    console.log("firstName:", inputs.firstName);
    console.log("lastName:", inputs.lastName);
    console.log("email:", inputs.email);
    console.log("password:", inputs.password);
    console.log("repeatPassword:", inputs.repeatPassword);
    
    // if (inputs.username === "admin" || inputs.password === "admin")
    //   // navigate("/mainmenupage");
    //   LoginAuth();
  };
  return (
    <Row>
      <Col
        span={24}
        style={{
          width: "100%",
          margin: "0",
          position: "absolute",
          top: "60%",
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
            placeholder={"Password"}
            empty={emptyPassword}
            tittle={passwordTittle}
          />
          <StrengthBar
            minLength={8}
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
          <SubminBTN handleSubmit={handleSubmit} span={10} offset={7} />
        </Form>
      </Col>
    </Row>
  );
};

export default FormRegister;
