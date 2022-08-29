import React from "react";
import { Row, Col, Avatar, Card } from "antd";

import "./logovistavms.styles.scss";
import { LogoLogin } from "../../../assets/Icons/JSXs/index";

const { Meta } = Card;
const LogoVISTAVMS = () => {
  return (
    <Row>
      <Col
        span={24}
        className="logo_container"
      >
        <Card className="logo_vista" name="basic">
          <Meta
            className="Logo_Login"
            avatar={<Avatar src={<LogoLogin width="100%" height="10vh"/>} />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default LogoVISTAVMS;
