import React from "react";
import { Col, Row } from "antd";

import SideBar from "../../components/live-view-items/sidebar/sidebar.component";
import LiveView from "../../components/live-view-items/liveview/liveview.component";

import "./liveviewpage.styles.scss";

const LiveViewPage = () => {
  return (
    <Row className="orginal_screen">
      {/* side bar */}
      <Col span={4}>
        <SideBar />
      </Col>
      {/* main content */}
      <Col span={20} className="window_screen">
        <LiveView />
      </Col>
    </Row>
  );
};

export default LiveViewPage;
