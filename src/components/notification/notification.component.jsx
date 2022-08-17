import React from "react";
import { Row, Col, notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

import "./notification.styles.scss";

const OpenNotification = (placement, dec, message, iconNotif) => {
  {
    iconNotif === "error"
      ? notification.open({
          message: `${message}`,
          description: `${dec}`,
          placement,
          duration: 5,
          icon: (
            <CloseCircleOutlined
              style={{
                color: "#f00",
              }}
            />
          ),
        })
      : notification.open({
          message: `${message}`,
          description: `${dec}`,
          placement,
          duration: 5,
          icon: (
            <CheckCircleOutlined
              style={{
                color: "#4fef7c",
              }}
            />
          ),
        });
  }
};

export default OpenNotification;
