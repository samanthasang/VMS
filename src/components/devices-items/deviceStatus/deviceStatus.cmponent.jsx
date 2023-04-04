import { Col } from "antd";
import React from "react";

import "./deviceStatus.styles.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DeviceStatus = () => {
  // the number of devices
  const countDevices = useSelector((state) => state.device.countDevices);
  useEffect(() => {
    console.log(countDevices);
  }, [countDevices]);

  return (
    <Col span={8} className="device-status">
      {/* show the nimber of all devices */}
      <span className="device-status_all">
        <span>All devices: </span>
        <span>{countDevices}</span>
      </span>

      {/* show the nimber of online devices */}
      <span className="device-status_online">
        <span>Online devices: </span>
        <span>{countDevices}</span>
      </span>
    </Col>
  );
};
export default DeviceStatus;
