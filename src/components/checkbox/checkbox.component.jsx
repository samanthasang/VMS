import React from "react";

import { Form, Checkbox } from "antd";


import "./checkbox.styles.scss";

const CheckBox = ({ inputs, handleChange, type, placeholder }) => {
  return (
    <Form.Item
      className="fg_password"
      name="remember"
      valuePropName="checked"
      noStyle
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
  );
};

export default CheckBox;
