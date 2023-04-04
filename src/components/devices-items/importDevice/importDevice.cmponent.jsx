import React, { useState } from "react";
import { Import } from "../../../assets/Icons/JSXs";

import "./importDevice.styles.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { UserLogOut } from "../../../redux/login_redux/loginAction";
import { useDispatch } from "react-redux";

const ImportDevice = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const user = useSelector((state) => state.login.user);

  return (
    <>
      <label
        className="header_btn btn_next"
        id="file-uploads-label"
        htmlFor="file-uploads"
        style={{ marginLeft: "15px", cursor: "pointer" }}
      >
        <Import
          style={{
            width: "18px",
            height: "18px",
            minWidth: "18px",
            minHeight: "18px",
            marginRight: "0.25rem",
          }}
        />
        Import
      </label>
      <input
        className="header_btn btn_next"
        placeholder="hello"
        type="file"
        id="file-uploads"
        name="file-uploads"
        style={{ marginLeft: "8px" }}
        accept="application/json"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
          const formData = new FormData();

          formData.append("File", event.target.files[0]);

          var url = "http://sentiligence.com/api/admin/devices/import";
          // var authorizationBasic = window.btoa(user + ":" + pass);
          var accessToken =user.accessToken
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
          var config = {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          };

          axios
            .post(url, formData, config)
            .then((response) => response.json())
            .then((result) => {
              console.log("Success:", result);
            })
            .catch((e) => {
              {
                e.response.status === 401 && dispatch(UserLogOut());
              }
              console.log(e);
            });
        }}
      />
    </>
  );
};
export default ImportDevice;
