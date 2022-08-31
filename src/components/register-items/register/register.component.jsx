import { Col, Form, Row } from "antd";
import React, { useEffect, useState } from "react";

import Registration from "../registration/registration.component";
import SetPassword from "../setpassword/setpassword.component";
import FormRegister from "../../forms/formregister/formregister.component";
import LoginBG from "../../../assets/login-bg.webp";

import "./register.styles.scss";

const Register = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [inputs, setInputs] = useState({
    email: "",
  });

  useEffect(() => {
    forceUpdate({});
  }, []);
  const [current, setCurrent] = useState(0);

  const next = (email) => {
    console.log("onChange:", email);
    setInputs({ email }, setCurrent(current + 1));
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
        style={{
          height: "520px",
          width: "930px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(70px)",
        }}
      >
        <Registration
          current={current}
          // ChangeCurrent={onChange}
          // next={next}
          // prev={prev}
        />
        <Row className="main_register_container_register">
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
