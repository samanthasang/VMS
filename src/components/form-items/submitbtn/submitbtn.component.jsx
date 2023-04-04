import React from "react";
import { Row, Col } from "antd";

import PrimaryBtn from "../primerybtn/primerybtn.component";

import "./submitbtn.styles.scss";

const SubminBTN = ({
  handleSubmit,
  span,
  offset,
  text,
  disabled,
  loadings,
}) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <PrimaryBtn
          text={text}
          handleSubmit={handleSubmit}
          loading={loadings}
          disabled={disabled}
        />
      </Col>
    </Row>
  );
};

export default SubminBTN;
