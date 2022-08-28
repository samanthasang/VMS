import React, { useState } from "react";
import { Col, Row } from "antd";

const LiveView = () => {
  // const [colCountKey, setColCountKey] = useState([16, 8, 8, 8, 8, 8]);
  return (
    <>
      <Row >
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Row>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `${30}vh`,
                  }}
                >
                  <h1>Col</h1>
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `${30}vh`,
                  }}
                >
                  <h1>Col</h1>
                </Col>
              </Row>
              <Row>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `${30}vh`,
                  }}
                >
                  <h1>Col</h1>
                </Col>
                <Col
                  span={12}
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    background: "#515253",
                    height: `${30}vh`,
                  }}
                >
                  <h1>Col</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LiveView;
