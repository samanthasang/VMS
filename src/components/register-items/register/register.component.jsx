import { Col, Form, Row } from "antd";
import React, { useState } from "react";

import Registration from "../registration/registration.component";
import SetQuestion from "../setpassword/setpassword.component";
import FormRegister from "../../forms/formregister/formregister.component";
import LoginBG from "../../../assets/login-bg.webp";

import "./register.styles.scss";

const Register = () => {
  const [form] = Form.useForm();
  // getting email for register user
  const [inputs, setInputs] = useState({
    email: "",
  });

  // current step for register 
  const [current, setCurrent] = useState(0);

  // go to next step for registering user
  const next = (email) => {
    console.log("onChange:", email);
    setInputs({ email }, setCurrent(current + 1));
  };

  // go to previus step for registering user
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    // background image for login page
    <Row
      className="login_bg register_container"
      justify="space-around"
      align="middle"
      style={{
        background: `url(${LoginBG})`,
      }}
    >
      <Col className="login_bg_container">
        {/* steps for registering proccess */}
        <Registration current={current} />
        <Row className="main_register_container_register">
          <Col span={24}>
            {current === 0 && (
              // register form
              <FormRegister
                form={form}
                shouldUpdate
                current={current}
                next={next}
                prev={prev}
              />
            )}
            {current === 1 && (
              // set question form
              <SetQuestion
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
