import { Button, Col, Form, Modal, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeLoading,
  LoadTable,
  // AddModalData,
  // RemoveModalData,
  CountDevices,
} from "../../../redux/device_redux/deviceAction";
import InputFormWithLabelPassword from "../../form-items/inputformwithlabel copy/inputformwithlabel.component";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";
// import OpenNotification from "../../form-items/notification/notification.component";

import "./modal-add-device.styles.scss";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import OpenNotification from "../../form-items/notification/notification.component";

const ModalAddDevice = ({
  handleOkManual,
  handleCancelManual,
  isAddModalVisible,
  idForEdit,
  titleModal,
  ClearidForEdit,
}) => {
  const dispatch = useDispatch();
  // get group
  const groups = useSelector((state) => state.device.groups);
  // get user information
  const user = useSelector((state) => state.login.user);
  // const inputsModal = useSelector((state) => state.device.modal);

  // getiing device information for add device
  const [inputs, setInputs] = useState({
    name: "",
    deviceType: "",
    deviceModel: "",
    ipDomain: "",
    mainStreamUrl: "",
    subStreamUrl: "",
    port: "",
    serialNumber: "",
    groupID: "",
    userName: "",
    password: "",
  });
  // check for device name input is empty
  const [nameEmpty, setNameEmpty] = useState(false);
  // check for device type input is empty
  const [deviceTypeEmpty, setDeviceTypeEmpty] = useState(false);
  // check for device model input is empty
  const [deviceModelEmpty, setDeviceModelEmpty] = useState(false);
  // check for ip domain input is empty
  const [ipDomainEmpty, setIpDomainEmpty] = useState(false);
  // check for main stream url input is empty
  const [mainStreamUrlEmpty, setMainStreamUrlEmpty] = useState(false);
  // check for sub stream url input is empty
  const [subStreamUrlEmpty, setSubStreamUrlEmpty] = useState(false);
  // check for por input is empty
  const [portEmpty, setPortEmpty] = useState(false);
  // check for serial number input is empty
  const [serialNumberEmpty, setSerialNumberEmpty] = useState(false);
  // check for group input is empty
  const [groupIDEmpty, setGroupIDEmpty] = useState(false);
  // check for username input is empty
  const [userNameEmpty, setUserNameEmpty] = useState(false);
  // check for password input is empty
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  // get array of group for attach the device to group
  var [groupArray, setGroupArray] = useState();
  var groupArraya = [];
  const groupArrayF = (groups) => {
    var g = [];
    groups.map((group) => {
      g.push(
        JSON.stringify({
          label: group.name,
          value: group.id,
          key: group.id,
        })
      );
    });
    groupArraya.push(`[${g}]`);
    setGroupArray(JSON.parse(groupArraya));
  };

  // submit device information to API
  const handleSubmitdevice = () => {
    if (idForEdit) {
      var url = process.env.REACT_APP_HTTP + "/api/admin/devices/" + idForEdit;

      var accessToken = user.accessToken;
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
      var config = {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };
      axios
        .get(url, config)
        .then((res) => {
          setInputs(res.data.data);
        })
        .catch((e) => {
          // e.response.status === 401 && dispatch(UserLogOut());
          console.log(e);
        });
    }
  };
  // renew access token in case of wxpired
  const ReNewAccessTokengroups = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    // check the access token expire time
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && handleSubmitdevice();
      })
      .catch((e) => {
        dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };

  // check expired time for access token
  useEffect(() => {
    groupArrayF(groups);
    const dateNow = moment(new Date()).unix();
    user.expAccessToken < dateNow
      ? ReNewAccessTokengroups()
      : handleSubmitdevice();
  }, [groups, idForEdit, groupIDEmpty, isAddModalVisible, user.expAccessToken]);

  // const handleChangeSelectID = (label, value) => {
  //   console.log(`selected `);
  //   console.log(`selected ${value}`);
  //   console.log(`selected ${label}`);
  //   // dispatch(ChangeAspectRatio(key));
  // };

  // getting info from inputs & for inputs to not to be empty
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (inputs.name !== "") {
      setNameEmpty(false);
    }
    if (inputs.deviceType !== "") {
      setDeviceTypeEmpty(false);
    }
    if (inputs.deviceModel !== "") {
      setDeviceModelEmpty(false);
    }
    if (inputs.ipDomain !== "") {
      setIpDomainEmpty(false);
    }
    if (inputs.mainStreamUrl !== "") {
      setMainStreamUrlEmpty(false);
    }
    if (inputs.subStreamUrl !== "") {
      setSubStreamUrlEmpty(false);
    }
    if (inputs.port !== "") {
      setPortEmpty(false);
    }
    if (inputs.serialNumber !== "") {
      setSerialNumberEmpty(false);
    }
    if (inputs.groupID !== "") {
      setGroupIDEmpty(false);
    }
    if (inputs.userName !== "") {
      setUserNameEmpty(false);
    }
    if (inputs.password !== "") {
      setPasswordEmpty(false);
    }
  };

  const handleSubmitAddDevice = (close) => {
    // check the inormation to not to be empty
    if (inputs.name === "") {
      setNameEmpty(true);
    }
    console.log("name:", inputs.name);
    if (inputs.deviceType === "") {
      setDeviceTypeEmpty(true);
    }
    console.log("deviceType:", inputs.deviceType);
    if (inputs.deviceModel === "") {
      setDeviceModelEmpty(true);
    }
    console.log("deviceModel:", inputs.deviceModel);
    if (inputs.ipDomain === "") {
      setIpDomainEmpty(true);
    }
    console.log("ipDomain:", inputs.ipDomain);
    if (inputs.mainStreamUrl === "") {
      setMainStreamUrlEmpty(true);
    }
    console.log("mainStreamUrl:", inputs.mainStreamUrl);
    if (inputs.subStreamUrl === "") {
      setSubStreamUrlEmpty(true);
    }
    console.log("subStreamUrl:", inputs.subStreamUrl);
    if (inputs.port === "") {
      setPortEmpty(true);
    }
    console.log("port:", inputs.port);
    if (inputs.serialNumber === "") {
      setSerialNumberEmpty(true);
    }
    console.log("serialNumber:", inputs.serialNumber);
    if (inputs.groupID === "") {
      setGroupIDEmpty(true);
    }
    console.log("groupID:", inputs.groupID);
    if (inputs.userName === "") {
      setUserNameEmpty(true);
    }
    console.log("userName:", inputs.userName);
    if (inputs.password === "") {
      setPasswordEmpty(true);
    }
    console.log("password:", inputs.password);
    // check the inormation to not to be empty
    if (
      inputs.name === "" ||
      inputs.deviceType === "" ||
      inputs.deviceModel === "" ||
      inputs.ipDomain === "" ||
      inputs.mainStreamUrl === "" ||
      inputs.subStreamUrl === "" ||
      inputs.port === "" ||
      inputs.serialNumber === "" ||
      inputs.groupID === "" ||
      inputs.userName === "" ||
      inputs.password === ""
    ) {
      return;
    }
    // if (inputs.password.length < 8) {
    //   OpenNotification("topRight", "Password is too Short", "", "error");
    //   return;
    // }
    // if (inputs.password !== inputs.repeatPassword) {
    //   OpenNotification("topRight", "Password Dosn`t Match", "", "error");
    //   return;
    // }

    dispatch(ChangeLoading());
    if (close === 1) {
      handleOkManual();
    }
    if (idForEdit) {
      ClearidForEdit();
    }
    // empty the inputs
    setInputs({
      name: "",
      deviceType: "",
      deviceModel: "",
      ipDomain: "",
      mainStreamUrl: "",
      subStreamUrl: "",
      port: "",
      serialNumber: "",
      groupID: "",
      userName: "",
      password: "",
    });
    console.log("name:", inputs.name);
    console.log("deviceModel:", inputs.deviceModel);
    console.log("deviceType:", inputs.deviceType);
    console.log("ipDomain:", inputs.ipDomain);
    console.log("mainStreamUrl:", inputs.mainStreamUrl);
    console.log("subStreamUrl:", inputs.subStreamUrl);
    console.log("port:", inputs.port);
    console.log("serialNumber:", inputs.serialNumber);
    console.log("groupID:", inputs.groupID);
    console.log("userName:", inputs.userName);
    console.log("password:", inputs.password);
    var url;
    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var tDevicesData = [];
    if (idForEdit) {
      // Send info to edit device API
      url = process.env.REACT_APP_HTTP + "/api/admin/devices/" + idForEdit;
      axios
        .put(url, inputs, config)
        .then((res) => {
          if (tDevicesData.length === 0) {
            res.data.data.devices.map((device) => {
              device.key = device.id;
              tDevicesData.push(device);
            });
          }
          dispatch(LoadTable(tDevicesData));
          dispatch(ChangeLoading());
          OpenNotification("topRight", "", res.data.msg, "");
        })
        .catch((e) => {
          // e.response.status === 401 && dispatch(UserLogOut());
          console.log(e);
        });
    } else {
      // Send info to add device API
      url = process.env.REACT_APP_HTTP + "/api/admin/devices/";
      axios
        .post(url, inputs, config)
        .then((res) => {
          console.log(res.data.data.count);
          dispatch(CountDevices(res.data.data.count));
          if (tDevicesData.length === 0) {
            res.data.data.devices.map((device) => {
              device.key = device.id;
              tDevicesData.push(device);
            });
          }
          dispatch(LoadTable(tDevicesData));
          dispatch(ChangeLoading());
          OpenNotification("topRight", "", res.data.msg, "");
        })
        .catch((e) => {
          // e.response.status === 401 && dispatch(UserLogOut());
          dispatch(ChangeLoading());
          OpenNotification("topRight", "", e.response.data.msg, "error");
          console.log(e);
        });
    }
  };
  // renew the access token and call add device API
  const ReNewAccessToken = async (c) => {
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
        res.status === 200 && handleSubmitAddDevice(c);
      })
      .catch((e) => {
        dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };

  const handleSubmit = (close) => {
    // close.preventDefault();
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessToken(close)
      : handleSubmitAddDevice(close);
  };
  // submit the add deice & close the modal
  const handleOkM = () => {
    handleSubmit(1);
  };
  // submit and continue adding deice
  const handleOkC = () => {
    handleSubmit(2);
  };
  // close the modal & delete the device information inputs
  const handleOkClose = () => {
    setInputs({
      password: "",
      name: "",
      deviceType: "",
      deviceModel: "",
      ipDomain: "",
      mainStreamUrl: "",
      subStreamUrl: "",
      port: "",
      serialNumber: "",
      groupID: "",
      userName: "",
    });
    // setInputs({ ...inputs, password: "" });

    // clear the empty input warrning
    setNameEmpty(false);
    setDeviceTypeEmpty(false);
    setDeviceModelEmpty(false);
    setIpDomainEmpty(false);
    setMainStreamUrlEmpty(false);
    setSubStreamUrlEmpty(false);
    setPortEmpty(false);
    setSerialNumberEmpty(false);
    setGroupIDEmpty(false);
    setUserNameEmpty(false);
    setPasswordEmpty(false);
    if (idForEdit) {
      ClearidForEdit();
    }
    handleOkManual();
  };

  var footerForModal;

  // footer of modal base on edit or add device
  if (idForEdit) {
    footerForModal = [
      // close the modal
      <Button className="btn_pre" key="back" onClick={handleOkClose}>
        Cancel
      </Button>,
      // submit edited information
      <Button
        className="btn_next"
        key="submit"
        type="submit"
        onClick={handleOkM}
      >
        Save
      </Button>,
    ];
  } else {
    footerForModal = [
      // close the modal
      <Button className="btn_pre" key="back" onClick={handleOkClose}>
        Cancel
      </Button>,
      // submit add device infromtion
      <Button
        className="btn_next"
        key="submit"
        type="submit"
        onClick={handleOkM}
      >
        Save
      </Button>,
      // submit add device infromtion & continue adding
      <Button className="btn_pre" type="back" onClick={handleOkC}>
        Save and continue
      </Button>,
    ];
  }
  return (
    <>
      <Modal
        className="modal_add_device_window"
        style={{
          width: "460px",
          backgroundColor: "transparent",
          color: "#F0F2F5",
        }}
        bodyStyle={{
          backgroundColor: "#2E333D",
        }}
        title={titleModal}
        okText={<> Add</>}
        centered={true}
        closable={true}
        visible={isAddModalVisible}
        onOk={handleOkManual}
        onCancel={handleOkClose}
        footer={footerForModal}
      >
        <Row>
          <Col span={24}>
            <Form onSubmit={handleSubmit} className="manual-add-inputs">
              {/* getting the name */}
              <InputFormWithLabel
                id="name"
                inputs={"name"}
                placeholder="Device name"
                label="Device Name"
                type="text"
                handleChange={handleChange}
                value={inputs.name}
                required={true}
                empty={nameEmpty}
              />

              {/* getting the deviceType */}
              <Form.Item
                className={`${
                  deviceTypeEmpty ? "border_red_label" : "select_normal"
                }`}
                id="deviceType"
                inputs={"deviceType"}
                placeholder="Device type"
                label="Device Type"
                type="text"
                value={inputs.deviceType}
                required={true}
                // empty={deviceTypeEmpty}
                rules={[
                  {
                    required: true,
                    message: "Please select device type!",
                  },
                ]}
              >
                {inputs.deviceType ? (
                  // devie type selected for edit
                  <Select
                    placeholder="Select your device type"
                    optionFilterProp="children"
                    name={"deviceType"}
                    // defaultValue={inputs.deviceType}
                    value={inputs.deviceType}
                    onChange={(value, id) => {
                      setInputs((inputs) => ({
                        ...inputs,
                        deviceType: id.value,
                      }));
                      setDeviceTypeEmpty(false);
                    }}
                    options={[
                      {
                        value: "IPC",
                        label: "IPC",
                      },
                    ]}
                  ></Select>
                ) : (
                  // choose the divice for add device
                  <Select
                    placeholder="Select your device type"
                    optionFilterProp="children"
                    name={"deviceType"}
                    // defaultValue={inputs.deviceType}
                    // value={inputs.deviceType}
                    onChange={(value, id) =>
                      setInputs((inputs) => ({
                        ...inputs,
                        deviceType: id.value,
                      }))
                    }
                    options={[
                      {
                        value: "IPC",
                        label: "IPC",
                      },
                    ]}
                  ></Select>
                )}
              </Form.Item>

              {/* getting the deviceModel */}
              <InputFormWithLabel
                id="deviceModel"
                inputs={"deviceModel"}
                placeholder="Device model"
                label="Device Model"
                type="text"
                handleChange={handleChange}
                value={inputs.deviceModel}
                empty={deviceModelEmpty}
              />
              {/* getting the ipDomain */}
              <InputFormWithLabel
                id="ipDomain"
                inputs={"ipDomain"}
                placeholder="IP/domain"
                label="IP/Domain"
                type="text"
                handleChange={handleChange}
                value={inputs.ipDomain}
                empty={ipDomainEmpty}
              />
              {/* getting the mainStreamUrl */}
              <InputFormWithLabelPassword
                id="mainStreamUrl"
                inputs={"mainStreamUrl"}
                placeholder="Main stream"
                label="Main stream"
                type="password"
                handleChange={handleChange}
                value={inputs.mainStreamUrl}
                empty={mainStreamUrlEmpty}
              />

              {/* getting the subStreamUrl */}
              <InputFormWithLabelPassword
                id="subStreamUrl"
                inputs={"subStreamUrl"}
                placeholder="Sub stream"
                label="Sub Stream"
                type="password"
                handleChange={handleChange}
                value={inputs.subStreamUrl}
                empty={subStreamUrlEmpty}
              />

              {/* getting the port */}
              <InputFormWithLabel
                id="port"
                inputs={"port"}
                placeholder="Port"
                label="Port"
                type="text"
                handleChange={handleChange}
                value={inputs.port}
                empty={portEmpty}
              />
              {/* getting the serialNumber */}
              <InputFormWithLabel
                id="serialNumber"
                inputs={"serialNumber"}
                placeholder="Serial number"
                label="Serial Number"
                type="text"
                handleChange={handleChange}
                value={inputs.serialNumber}
                empty={serialNumberEmpty}
              />

              {/* getting the groupID */}
              <Form.Item
                className={`${
                  groupIDEmpty ? "border_red_label" : "select_normal"
                }`}
                id="groupID"
                inputs={"groupID"}
                placeholder="Groupe name"
                label="Groupe Name"
                type="text"
                // value={inputs.groupID}
                required={true}
                // empty={groupIDEmpty}
                rules={[
                  {
                    required: true,
                    message: "Please select Group Name!",
                  },
                ]}
              >
                {inputs.groupID ? (
                  // select group for edit the device
                  <Select
                    placeholder="Select your group name"
                    name="groupID"
                    trigger={["click"]}
                    // placement="top"
                    // className="footer_select_live_view"
                    value={inputs.groupID}
                    // onChange={handleChangeSelectID}
                    onChange={(value, id) => {
                      setInputs((inputs) => ({
                        ...inputs,
                        groupID: id.value,
                      }));
                      setGroupIDEmpty(false);
                    }}
                    options={groupArray}
                    // options={[
                    //   {
                    //     value: "IPC",
                    //     label: "IPC",
                    //   },
                    // ]}
                  ></Select>
                ) : (
                  // select group for add device
                  <Select
                    placeholder="Select your group name"
                    name="groupID"
                    trigger={["click"]}
                    // placement="top"
                    // className="footer_select_live_view"
                    // value={inputs.groupID}
                    // onChange={handleChangeSelectID}
                    onChange={(value, id) => {
                      setInputs((inputs) => ({
                        ...inputs,
                        groupID: id.value,
                      }));
                      setGroupIDEmpty(false);
                    }}
                    options={groupArray}
                    // options={[
                    //   {
                    //     value: "IPC",
                    //     label: "IPC",
                    //   },
                    // ]}
                  ></Select>
                )}
              </Form.Item>

              {/* getting the userName */}
              <InputFormWithLabel
                id="userName"
                inputs={"userName"}
                placeholder="Username"
                label="Username"
                type="text"
                handleChange={handleChange}
                value={inputs.userName}
                empty={userNameEmpty}
              />

              {/* getting the password */}
              <InputFormWithLabelPassword
                id="password"
                inputs={"password"}
                placeholder="Password"
                label="Password"
                type="text"
                handleChange={handleChange}
                value={inputs.password}
                empty={passwordEmpty}
              />
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalAddDevice;
