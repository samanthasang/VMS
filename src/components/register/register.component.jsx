import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Registration from "../registration/registration.component";
import SetPassword from "../setpassword/setpassword.component";
import RegistrationNavigation from "../registerationnavigation/registerationnavigation.component";
import FormRegister from "../forms/formregister/formregister.component";
import LoginBG from "../../assets/login-bg.jpg";
import LoginFormBG from "../../assets/login-form-bg.svg";
import OpenNotification from "../notification/notification.component";

import "./register.styles.scss";

const { Meta } = Card;

const Register = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const next = (firstName, lastName, email, password, repeatPassword) => {
    console.log(
      "onChange:",
      firstName,
      lastName,
      email,
      password,
      repeatPassword
    );
    setCurrent(current + 1);
    setInputs({ email });
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
        <Row className="main_container_form">
          <Col span={24}>
            {current === 0 && (
              <FormRegister
                form={form}
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
              />
            )}
            {current === 1 && (
              <SetPassword
                form={form}
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
                email={inputs.email}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Register;
