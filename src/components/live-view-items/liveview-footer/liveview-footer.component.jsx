import React from "react";
import { Col, Row } from "antd";

import LiveViewFooterPanel from "../liveview-footer-panel/liveview-footer-panel.component";
import LiveViewFooterView from "../liveview-footer-view/liveview-footer-view.component";
import "./liveview-footer.styles.scss";

const LiveViewFooter = ({ handleFullscreen }) => {
  return (
    <Col span={24} style={{ height: "3rem", background: "#14161A" }}>
      <Row style={{ height: "100%" }}>
        {/* live view footre for change aspect ratio & save view */}
        <LiveViewFooterView />
        {/* live view footre for change windows */}
        <LiveViewFooterPanel handleFullscreen={handleFullscreen} />
      </Row>
    </Col>
  );
};

export default LiveViewFooter;
