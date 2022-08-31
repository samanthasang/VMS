import React from "react";
import { Row, Col, Tooltip } from "antd";

import { Form, Input } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";
import { User } from "../../../assets/Icons/JSXs";

import "./inputform.styles.scss";

const InputForm = ({
  span,
  offset,
  inputs,
  handleChange,
  type,
  placeholder,
  empty,
  value,
}) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Form.Item
          className={` ${empty ? "border_red" : "input_form"}`}
          onChange={handleChange}
          value={value}
          type={type}
        >
          {empty ? (
            <Input
              autoComplete="on"
              name={inputs}
              prefix={<User className="site-form-item-icon" />}
              placeholder={placeholder}
              suffix={
                <Tooltip title="Required">
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
              name={inputs}
              prefix={<User className="site-form-item-icon" />}
              placeholder={placeholder}
            />
          )}
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InputForm;
