import React, { useState } from "react";
import { Col, Row } from "antd";

import SideBar from "../../components/live-view-items/sidebar/sidebar.component";
import LiveView from "../../components/live-view-items/liveview/liveview.component";

import "./liveviewpage.styles.scss";

const LiveViewPage = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const handleFullscreenn = () => {
    setFullScreen(!fullScreen);
  };
  return (
    <Row className={fullScreen ? "full_screen" : "orginal_screen"}>
      <Col span={fullScreen ? 0 : 4}>
        <SideBar />
      </Col>
      <Col span={fullScreen ? 24 : 20} className="window_screen">
        <LiveView
          handleFullscreenn={handleFullscreenn}
          fullscreen={fullScreen}
        />
      </Col>
    </Row>
  );
};

export default LiveViewPage;
