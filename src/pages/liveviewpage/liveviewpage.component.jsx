import { Col, Row } from "antd";
import React from "react";

import SideBar from "../../components/sidebar/sidebar.component";
import LiveView from "../../components/liveview/liveview.component";

const LiveViewPage = () => {
  return (
    <Row className="main_view">
      <Col span={4}>
        <SideBar />
      </Col>
      <Col span={20}>
        <LiveView />
      </Col>
    </Row>
  );
};

export default LiveViewPage;
