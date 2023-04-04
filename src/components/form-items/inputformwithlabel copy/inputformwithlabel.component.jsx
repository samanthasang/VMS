import React from "react";

import { Form, Input, Tooltip } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";

import "./inputformwithlabel.styles.scss";

const InputFormWithLabelPassword = ({
  inputs,
  handleChange,
  type,
  placeholder,
  label,
  empty,
  tittle,
  value,
  required,
}) => {
  return (
    <Form.Item
      className={`${empty ? "border_red_label" : "input_form_label"}`}
      onChange={handleChange}
      type={type}
      label={label}
      required
    >
      {empty ? (
        <Input
          name={inputs}
          value={value}
          autoComplete="new-password"
          placeholder={placeholder}
          suffix={
            <Tooltip title={`${tittle ? tittle : "Required"}`}>
              <InfoCircleOutlined
                style={{
                  color: "rgba(255,0,0,.8)",
                }}
              />
            </Tooltip>
          }
        />
      ) : (
        <Input.Password value={value} name={inputs} placeholder={placeholder} />
      )}
    </Form.Item>
  );
};

export default InputFormWithLabelPassword;
