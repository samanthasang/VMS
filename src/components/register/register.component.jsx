import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Registration from "../registration/registration.component";
import SetPassword from "../setpassword/setpassword.component";
import RegistrationNavigation from "../registerationnavigation/registerationnavigation.component";
import FormRegister from "../forms/formregister/formregister.component";
import LoginBG from "../../assets/login-bg.svg";
import LoginFormBG from "../../assets/login-form-bg.svg";

import "./register.styles.scss";

const { Meta } = Card;

const Register = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    question1: "",
    question2: "",
    question3: "",
    question1Answer: "",
    question2Answer: "",
    question3Answer: "",
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const next = () => {
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
        span={14}
        style={{
          height: "66vh",
          background: `url(${LoginFormBG})`,
          backdropFilter: "blur(100px)",
          borderRadius: "8px",
        }}
      >
        <Registration
          current={current}
          // ChangeCurrent={onChange}
          // next={next}
          // prev={prev}
        />
        <Row>
          <Col
            span={24}
            style={{
              width: "100%",
              margin: "0",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {current === 0 && <FormRegister form={form} />}
            {current === 1 && <SetPassword form={form} />}
          </Col>
        </Row>
        <RegistrationNavigation
          shouldUpdate
          current={current}
          next={next}
          prev={prev}
          form={form}
        />
      </Col>
    </Row>
  );
};

export default Register;
