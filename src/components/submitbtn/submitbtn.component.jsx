import React from "react";
import { Row, Col } from "antd";

import PrimaryBtn from "../primerybtn/primerybtn.component";

import "./submitbtn.styles.scss";

const SubminBTN = ({ handleSubmit, span, offset }) => {
  return (
    <Row>
      <Col span={span} offset={offset}>
        <PrimaryBtn handleSubmit={handleSubmit} />
      </Col>
    </Row>
  );
};

export default SubminBTN;
