import React from "react";
import { Col, Row } from "antd";
import PlayBack from "../../components/playback-items/playback/playback.component";
import PanelTabs from "../../components/playback-items/panel-tabs-sidebar/panel-tabs-sidebar.component";

import "./playbackpage.styles.scss";
const PlayBackPage = () => {
  return (
    <Row className={"orginal_screen"}>
      {/* panel for camera and local video */}
      <Col span={4}>
        <PanelTabs />
      </Col>
      {/* main content */}
      <Col span={20} className="window_screen" id="target">
        <PlayBack />
      </Col>
    </Row>
  );
};

export default PlayBackPage;
