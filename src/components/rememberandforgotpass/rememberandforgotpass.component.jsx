import React from "react";

import { Row, Col, Form } from "antd";

import CheckBox from "../checkbox/checkbox.component";
import LinkTo from "../linkto/linkto.componrnt";

import "./rememberandforgotpass.styles.scss";

const RememberAndForgotPass = ({ span, offset, handleChangecheckbox }) => {
  return (
    <Row>
      <Col span={span} offset={offset} className="remember_forgotpasswod">
        <Form.Item>
          <Row>
            <CheckBox
              span={12}
              offset={0}
              handleChangecheckbox={handleChangecheckbox}
            />
            <LinkTo
              torouting={"/forgotten-password"}
              text={"Forgot password?"}
              span={12}
              offset={0}
            />
          </Row>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default RememberAndForgotPass;
