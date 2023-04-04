import React from "react";
import { Col, Row } from "antd";
import { Ezgif } from "../../assets/Icons/JSXs/index";
import "./505pagestyles.scss";
import { Link } from "react-router-dom";

const Page505 = () => {
  return (
    <Row
      className="full_screen"
      style={{ backgroundColor: "#2E333D", alignContent: "center" }}
    >
      <Col span={24} className="window_screen page_505">
        <Ezgif />
        <span className="title_505">Internal server Error </span>
        <span className="des_505">sorry an error occured </span>
        <Link to={"/liveview"} className="btn_next btn_505" type="primary">
          Back to Home Page
        </Link>
      </Col>
    </Row>
  );
};

export default Page505;
