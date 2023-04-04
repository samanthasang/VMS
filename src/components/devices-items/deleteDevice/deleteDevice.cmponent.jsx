import React, { useState } from "react";
import { Button } from "antd";
import { Delete } from "../../../assets/Icons/JSXs";

import "./deleteDevice.styles.scss";
import ModalDeleteDevice from "../../generals-items/modal-delete-device/modal-delete-device.component";
import ModalDeleteEmpty from "../../generals-items/modal-delete-empty/modal-delete-empty.component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  ChangeLoading,
  LoadTable,
} from "../../../redux/device_redux/deviceAction";
// import ModalDeleteDemo from "../../generals-items/modal-delete-demo/modal-delete-demo.component";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import OpenNotification from "../../form-items/notification/notification.component";

const DeleteDevice = () => {
  const dispatch = useDispatch();
  // get the id for selected devices for delete API
  const selectedRowKeys = useSelector((state) => state.device.rowSelected);

  // get the user information
  const user = useSelector((state) => state.login.user);

  // visibilty of Modal Delete in case of no selected device
  const [isModalOpenEmpty, setIsModalOpenEmpty] = useState(false);
  // visibilty of Modal Delete in case of one or more selected device
  const [isModalOpen, setIsModalOpen] = useState(false);

  // text for title of modal base on number of selected devices
  const [textModal, setTextModal] = useState(
    "Are you sure to delete the device?"
  );

  // delete the divce from table
  const deleteFromTable = (array) => {
    dispatch(ChangeLoading());
    var url = process.env.REACT_APP_HTTP + "/api/admin/devices/multi-delete";
    var value = {
      devices: array,
    };

    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    var tDevicesData = [];
    var noTable = 1;

    // Send id to delete device API
    axios
      .post(url, value, config)
      .then((res) => {
        if (tDevicesData.length === 0) {
          res.data.data.devices.map((device) => {
            device.nom = noTable;
            device.key = device.id;
            tDevicesData.push(device);
            noTable++;
          });
        }
        // refresh the table of devices
        OpenNotification("topRight", "", res.data.msg, "");
        dispatch(LoadTable(tDevicesData));
        dispatch(ChangeLoading());
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };

  // delete device btn
  const deleteBTN = () => {
    // in case of no device selected
    if (selectedRowKeys.length === 0) {
      setIsModalOpenEmpty(true);
    }
    // in case of one device selected
    if (selectedRowKeys.length === 1) {
      setTextModal("Are you sure to delete the device?");
      setIsModalOpen(true);
    }
    // in case of multi device selected
    if (selectedRowKeys.length > 1) {
      setTextModal("Are you sure you want to delete the selected devices?");
      setIsModalOpen(true);
    }
  };
  const handleOkE = () => {
    setIsModalOpenEmpty(false);
  };
  // renew the access token
  const ReNewAccessToken = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };

    // renew access token API
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && deleteFromTable(selectedRowKeys);
      })
      .catch((e) => {
        dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };
  // check access token
  const CheckAccessToken = (selectedRowKeys) => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessToken(selectedRowKeys)
      : deleteFromTable(selectedRowKeys);
  };

  // submit the delete API
  const handleOk = () => {
    console.log(selectedRowKeys);
    CheckAccessToken(selectedRowKeys);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* delete device BTN */}
      <Button
        className="header_btn btn_next"
        type="primary"
        onClick={deleteBTN}
        style={{ marginLeft: "8px" }}
      >
        {/* delete icon */}
        <Delete
          style={{
            width: "18px",
            height: "18px",
            minWidth: "18px",
            minHeight: "18px",
            marginRight: "0.25rem",
          }}
        />
        Delete
      </Button>
      {/* delete device Modal */}
      <ModalDeleteDevice
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        textModal={textModal}
        selectedRowKeys={selectedRowKeys}
      />

      {/* delete device Modal in case of no device selected */}
      <ModalDeleteEmpty isModalOpen={isModalOpenEmpty} handleOk={handleOkE} />
      {/* <ModalDeleteDemo isModalOpen={isModalOpenEmpty} handleOk={handleOkE} /> */}
    </>
  );
};
export default DeleteDevice;
