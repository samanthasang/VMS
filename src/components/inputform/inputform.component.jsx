import React from "react";
import { Row, Col, Tooltip } from "antd";

import { Form, Input } from "antd";

import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import "./inputform.styles.scss";

const InputForm = ({
  span,
  offset,
  inputs,
  handleChange,
  type,
  placeholder,
  empty
}) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <Form.Item
          className={` ${empty ? "border_red" : "input_form"}`}
          onChange={handleChange}
          type={type}
        >
          {empty ? (
            <Input
              name={inputs}
              prefix={<UserOutlined className="site-form-item-icon" />}
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={placeholder}
            />
          )}
        </Form.Item>
      </Col>
    </Row>
  );
};

export default InputForm;
