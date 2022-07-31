import React from "react";

import { Form, Input } from "antd";


import "./inputformwithlabel.styles.scss";

const InputFormWithLabel = ({ inputs, handleChange, type, placeholder, label }) => {
  return (
    <Form.Item
      className="input_form"
      onChange={handleChange}
      type={type}
      label={label}
      rules={[{ required: true, message: "Please input your Username!" }]}
    >
      <Input
        name={inputs}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default InputFormWithLabel;
