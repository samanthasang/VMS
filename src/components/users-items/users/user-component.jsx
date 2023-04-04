import React, { useState } from "react";

import { Col, Row } from "antd";
import "./user.styles.scss";
import Usercontact from "../userContact-sidebar/userContact-sidebar.component";
import Userdisplay from "../user-display/userDisplay.component";

const User = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const handleFullscreen = () => {
    var elem = document.getElementById("live_view_container");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  return (
    <>
      <Row
        className={fullScreen ? "full_screen" : "orginal_screen"}
        gutter={16}
        style={{ background: "#21242C" }}
      >
        <Col
          span={fullScreen ? 0 : 4}
          style={{
            height: "calc(100vh - 3rem - 23px)",
            top: "13px",
          }}
        >
          <Usercontact />
        </Col>
        <Col
          span={fullScreen ? 24 : 20}
          className="window_screen"
          style={{
            height: "calc(100vh - 3rem - 55px)",
            top: "13px",
          }}
        >
          <Userdisplay
            handleFullscreenn={handleFullscreen}
            fullscreen={fullScreen}
          />
        </Col>
      </Row>
    </>
  );
};

export default User;
