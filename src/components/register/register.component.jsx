import { Avatar, Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import InputForm from "../inputform/inputform.component";
import InputPasswordForm from "../inputpasswordform/inputpasswordform.component";
import Registration from '../registration/registration.component';
import SetPassword from '../setpassword/setpassword.component';
import RegistrationNavigation from '../registerationnavigation/registerationnavigation.component';

import LoginBG from "../../assets/login-bg.svg";
import LoginFormBG from "../../assets/login-form-bg.svg";

import './register.styles.scss'

const { Meta } = Card;

const Register = () => {

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(
      (inputs) => ({ ...inputs, [name]: value }),
      console.log(
        "username:" + inputs.username + "  name " + name + "  value " + value
      )
    );
  };
  const onFinish = (inputs) => {
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username === "admin" || inputs.password === "admin")
      navigate("/mainmenupage");
  };
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
        }}
      >
        <Row span={16}>
          <Col
            span={24}
            style={{
              border: "none",
              background: "transparent",
              margin: "0",
              position: "absolute",
              top: "40px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100px",
              alignItems: "center",
            }}
          >
            <Registration
              current={current}
              ChangeCurrent={onChange}
              next={next}
              prev={prev}
            />
          </Col>
        </Row>
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
            {current === 0 && (
              <Form
                form={form}
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
                <Row>
                  <Col span={10} offset={7}>
                    <InputForm
                      inputs={"firstname"}
                      handleChange={handleChange}
                      type={"text"}
                      placeholder={"First Name"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={10} offset={7}>
                    <InputForm
                      inputs={"lastname"}
                      handleChange={handleChange}
                      type={"text"}
                      placeholder={"Last Name"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={10} offset={7}>
                    <InputForm
                      inputs={"email"}
                      handleChange={handleChange}
                      type={"text"}
                      placeholder={"Email"}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={10} offset={7}>
                    <InputPasswordForm
                      inputs={"password"}
                      handleChange={handleChange}
                      type={Text}
                      placeholder={"Password"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={10} offset={7}>
                    <InputPasswordForm
                      inputs={"password"}
                      handleChange={handleChange}
                      type={Text}
                      placeholder={"Confirm Password"}
                    />
                  </Col>
                </Row>
              </Form>
            )}
            {current === 1 && <SetPassword />}
          </Col>
        </Row>
        <Row>
          <Col className="navigation_registeration" span={24}>
            <RegistrationNavigation shouldUpdate
              current={current}
              next={next}
              prev={prev}
              form={form}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Register;