import React from "react";

import { Row, Col, Form } from "antd";

import CheckBox from "../checkbox/checkbox.component";
import LinkTo from "../linkto/linkto.componrnt";

import "./rememberandforgotpass.styles.scss";

const RememberAndForgotPass = ({ span, offset }) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Form.Item>
          <Row>
            <CheckBox span={12} offset={0} />
            <LinkTo
              torouting={"/forgotpassword"}
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
