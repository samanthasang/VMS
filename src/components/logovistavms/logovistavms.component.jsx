import React from "react";
import { Row, Col, Avatar, Card } from "antd";

import "./logovistavms.styles.scss";

const { Meta } = Card;
const LogoVISTAVMS = ({ src }) => {
  return (
    <Row>
      <Col
        span={24}
        style={{
          border: "none",
          background: "transparent",
          margin: "0",
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100px",
          alignItems: "center",
        }}
      >
        <Card className="logo_vista" name="basic">
          <Meta
            className="Logo_Login"
            style={{ justifyContent: "center" }}
            avatar={<Avatar src={src} />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default LogoVISTAVMS;
