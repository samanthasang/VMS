import React from "react";
import { Row, Col,notification } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';

import "./notification.styles.scss";

const OpenNotification = (placement) => {
  notification.open({
    message: `Notification`,
    description: "Your account will confirm by Admin.",
    placement,
    duration: 0,
    icon: (
      <CheckCircleOutlined
        style={{
          color: "#4fef7c",
        }}
      />
    ),
  });
};

export default OpenNotification;
