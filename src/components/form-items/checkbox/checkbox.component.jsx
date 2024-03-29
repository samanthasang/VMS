import React from "react";

import { Col, Form, Checkbox } from "antd";

import "./checkbox.styles.scss";

const CheckBox = ({ span, offset, handleChangecheckbox }) => {
  return (
    <Col className="txt_remember" span={span} offset={offset}>
      <Form.Item
        className="fg_password"
        name="remember"
        valuePropName="checked"
        noStyle
      >
        <Checkbox onChange={handleChangecheckbox} checked="false">
          Remember me
        </Checkbox>
      </Form.Item>
    </Col>
  );
};

export default CheckBox;
