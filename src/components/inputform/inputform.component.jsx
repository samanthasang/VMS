import React from "react";

import { Form, Input } from "antd";

import { UserOutlined } from "@ant-design/icons";

import "./inputform.styles.scss";

const InputForm = ({ inputs, handleChange, type, placeholder }) => {
  return (
    <Form.Item
      className="input_form"
      onChange={handleChange}
      type={type}
      rules={[{ required: true, message: "Please input your Username!" }]}
    >
      <Input
        name={inputs}
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default InputForm;