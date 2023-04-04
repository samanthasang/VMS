import React from "react";

import { Col, Row } from "antd";
import HeaderDevicePage from "../headerDevicepage/headerDevicepage.component";
import TableDevicePage from "../tableDevicepage/tableDevicePage.component";
import "./devices.styles.scss";

const Devices = () => {
  return (
    <Row className="orginal_screen">
      {/* full wide div */}
      <Col
        span={24}
        className="window_screen"
        style={{ backgroundColor: "#21242C" }}
      >
        {/* render the header menu for add device & delete device */}
        <HeaderDevicePage />
        {/* render the table of devices */}
        <TableDevicePage />
      </Col>
    </Row>
  );
};
export default Devices;
