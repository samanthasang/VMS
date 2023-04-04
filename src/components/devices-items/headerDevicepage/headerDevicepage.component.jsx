import React from "react";
import { Col, Row } from "antd";

import "./headerDevicepage.styles.scss";
import AddNewDevice from "../AddNewDevice/AddNewDevice";
import DeleteDevice from "../deleteDevice/deleteDevice.cmponent";
// import ImportDevice from "../importDevice/importDevice.cmponent";
// import ExportDevice from "../exportDevice/exportDevice.cmponent";
import DeviceStatus from "../deviceStatus/deviceStatus.cmponent";

const HeaderDevicePage = () => {
 


  return (
    <Row style={{ height: "3rem" }}>
      <Col
        span={16}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* add device BTN */}
        <AddNewDevice />
        {/* delete device BTN */}
        <DeleteDevice />
        {/* <ImportDevice />
        <ExportDevice /> */}
      </Col>
      <DeviceStatus />
    </Row>
  );
};

export default HeaderDevicePage;
