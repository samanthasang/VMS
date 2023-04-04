import React from "react";

import { Form, Input, Tooltip } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";

import "./inputformwithlabel.styles.scss";

const InputFormWithLabel = ({
  inputs,
  handleChange,
  value,
  type,
  placeholder,
  label,
  empty,
  tittle,
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
          type={type}
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
        <Input
          value={value}
          type={type}
          name={inputs}
          placeholder={placeholder}
        />
      )}
    </Form.Item>
  );
};

export default InputFormWithLabel;
