import React from "react";

import { Col, Row } from "antd";

import LiveViewFooter from "../liveview-footer/liveview-footer.component";

import LiveViewDisplay from "../liveviewdisplay/liveviewdisplay.component";
import "./liveview.styles.scss";
import screenfull from "screenfull";

const LiveView = () => {
  // handle fullscreen for main section in live view page
  const handleFullscreen = () => {
    var elem = document.getElementById("live_view_container");

    screenfull.toggle(elem);
  };

  return (
    <>
      <Row className="live_view_container">
        {/* full wide div */}
        <Col span={24} style={{ height: "calc(100% - 3rem)" }}>
          <Row style={{ height: "100%" }}>
            {/* live view windows */}
            <LiveViewDisplay />
            {/* live view footer */}
            <LiveViewFooter handleFullscreen={handleFullscreen} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LiveView;
