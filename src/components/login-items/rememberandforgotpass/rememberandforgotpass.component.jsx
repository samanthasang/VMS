import React from "react";

import { Row, Col, Form } from "antd";

import CheckBox from "../../form-items/checkbox/checkbox.component";
import LinkTo from "../../form-items/linkto/linkto.componrnt";

import "./rememberandforgotpass.styles.scss";

const RememberAndForgotPass = ({ span, offset, handleChangecheckbox }) => {
  return (
    <Row>
      <Col span={span} offset={offset} className="remember_forgotpasswod">
        <Form.Item>
          <Row>
            {/* remmeber user checkbox */}
            <CheckBox
              span={12}
              offset={0}
              handleChangecheckbox={handleChangecheckbox}
            />
            {/* navigate to forgottpassword page */}
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
