import { Button, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LDelete } from "../../../assets/Icons/JSXs";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";

import "./modal-delete-group.styles.scss";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import OpenNotification from "../../form-items/notification/notification.component";

const ModalDeleteGroup = ({
  isModalOpenGroup,
  handleOkGroup,
  handleCancelGroup,
  textModal,
  getKey,
}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.login.user);
  function extractData(trees) {
    var jTrees = [];
    trees.map((tree) => {
      var jTree = {
        id: tree.id,
        title: tree.name,
        key: tree.key,
        icon: 1,
        children: [],
      };
      if (tree.devices && tree.devices.length) {
        tree.devices.map((device) => {
          jTree.children.push({
            id: device.id,
            title: device.name,
            key: device.key,
            icon: 2,
            mainStreamURL: device.mainStreamURL,
            subStreamURL: device.subStreamURL,
            ipDomain: device.ipDomain,
            deviceType: device.deviceType,
            port: device.port,
            serialNumber: device.serialNumber,
            username: device.username,
            password: device.password,
            deviceModel: device.deviceModel,
            status: device.status,
          });
        });
      }
      if (tree.groups && tree.groups.length) {
        jTree.children = jTree.children.concat(...extractData(tree.groups));
      }
      jTrees.push(jTree);
    });
    return jTrees;
  }

  const HandleDeleteGroup = () => {
    console.log(getKey.id);
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/" + getKey.id;

    var accessToken = user.accessToken;
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    axios
      .delete(url, config)
      .then((res) => {
        console.log(res.data.data);
        const dt = extractData(res.data.data);
        console.log("OB" + dt);
        dispatch(SetOrganization(dt));
        OpenNotification("topRight", "", res.data.msg, "");
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };
  const ReNewAccessToken = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && HandleDeleteGroup();
      })
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };
  const DeleteGroup = () => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);
    {
      user.expAccessToken < dateNow ? ReNewAccessToken() : HandleDeleteGroup();
    }
  };
  const handleOk = () => {
    DeleteGroup();
    handleOkGroup();
  };
  return (
    <>
      <Modal
        className="modal_logout_window"
        visible={isModalOpenGroup}
        onOk={handleOk}
        onCancel={handleCancelGroup}
        footer={[
          <Button type="primary" className="btn_next" onClick={handleOk}>
            Delete
          </Button>,
          <Button className="btn_pre" onClick={handleCancelGroup}>
            Cancel
          </Button>,
        ]}
        open={isModalOpenGroup}
        title="Delete Group"
        centered
        style={{
          width: `520px`,
          borderRadius: "15px!important",
        }}
      >
        <LDelete />
        <p>Are you sure to delete this group ?</p>
      </Modal>
    </>
  );
};

export default ModalDeleteGroup;
