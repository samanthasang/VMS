import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import CheckBox from "../checkbox/checkbox.component";
import LinkTo from "../linkto/linkto.componrnt";
import PrimaryBtn from "../primerybtn/primerybtn.component";

import LogoVISTAVMS from "../logovistavms/logovistavms.component";

import LogoSuccess from "../../assets/success-icon.svg";
import LoginBG from "../../assets/login-bg.svg";
import LoginFormBG from "../../assets/login-form-bg.svg";
import "./registrationsuccess.styles.scss";
import { Link } from "react-router-dom";

const RegisterSuccess = ({ LoginAuth }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
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
    if (inputs.username === "admin" || inputs.password === "admin")
      // navigate("/mainmenupage");
      LoginAuth();
  };

  return (
        <Row>
          <Col
            span={24}
            style={{
              border: "none",
              background: "transparent",
              margin: "0",
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100px",
              alignItems: "center",
            }}
          >
            <LogoVISTAVMS src={LogoSuccess} />
          </Col>
          <Col
            span={24}
            style={{
              width: "100%",
              margin: "0",
              position: "absolute",
              top: "60%",
              left: "50%",
                transform: "translate(-50%, -50%)",
              textAlign: 'center'
            }}
          >
            <h1>Success</h1>
          </Col>
        </Row>
  );
};

export default RegisterSuccess;
