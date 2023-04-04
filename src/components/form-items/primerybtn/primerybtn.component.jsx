import React from "react";

import { Button, Form } from "antd";

import "./primerybtn.styles.scss";
import { useSelector } from "react-redux";

const PrimaryBtn = ({ handleSubmit, text, disabled }) => {
  const loading = useSelector((state) => state.playback.loading);
  return (
    <Form.Item>
      <Button
        type="submit"
        htmlType="submit"
        className="btn_next"
        disabled={disabled}
        style={{ width: "100%", marginLeft: "0" }}
        onClick={handleSubmit}
        loading={loading}
      >
        {text}
      </Button>
    </Form.Item>
  );
};

export default PrimaryBtn;
