import React from "react";
import { Export } from "../../../assets/Icons/JSXs";
import { Button } from "antd";

import "./exportDevice.styles.scss";
import { useSelector } from "react-redux";

const ExportDevice = () => {
  const user = useSelector((state) => state.login.user);


  const exportBTN = () => {
    // var anchor = document.createElement("a");
    // anchor.href = "/cameraExport.txt";
    // anchor.download = { data };
    // anchor.click();
    // console.log(data);

    var url = "http://sentiligence.com/api/admin/devices/export?accessToken=";

    var accessToken = user.accessToken;
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    const Authorization = "Bearer " + accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    var anchor = document.createElement("a");
    anchor.href =
      "http://sentiligence.com/api/admin/devices/export?accessToken=" +
      accessToken;

    // anchor.href = "/cameraListExport.txt";
    // anchor.download = { data };
    anchor.click();
  }
  return (
    <>
      <Button
        className="header_btn btn_next"
        type="primary"
        onClick={exportBTN}
      >
        <Export
          style={{
            width: "18px",
            height: "18px",
            minWidth: "18px",
            minHeight: "18px",
            marginRight: "0.25rem",
          }}
        />
        Export
      </Button>
    </>
  );
};
export default ExportDevice;
