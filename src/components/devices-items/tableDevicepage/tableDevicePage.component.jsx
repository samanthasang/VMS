import React, { useEffect, useState } from "react";
import { Col, Row, Space, Table } from "antd";

import { useDispatch } from "react-redux";
import {
  ChangeLoading,
  CountDevices,
  GroupTable,
  LoadTable,
  SelectRowForDelete,
} from "../../../redux/device_redux/deviceAction";
import {
  Delete,
  EditDefault,
  Offline,
  Online,
} from "../../../assets/Icons/JSXs/index";
import { useSelector } from "react-redux";
import axios from "axios";

import "./tableDevicePage.styles.scss";
import ModalAddDevice from "../../generals-items/modal-add-device/modal-add-device.component";
import ModalDeleteDevice from "../../generals-items/modal-delete-device/modal-delete-device.component";
// import ModalDeleteDemo from "../../generals-items/modal-delete-demo/modal-delete-demo.component";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import ModalCheckPassword from "../../generals-items/modal-check-password/modal-ckeck-password.component";
import OpenNotification from "../../form-items/notification/notification.component";

const TableDevicePage = () => {
  const dispatch = useDispatch();
  // getting user information
  const user = useSelector((state) => state.login.user);
  // select device for delete
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // visibilty for edit modal
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  // visibilty for cahck password modal
  const [isCheckModalVisible, setIsCheckModalVisible] = useState(false);

  // visibilty for delete device modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // the device id for edit
  const [idForEdit, setIdForEdit] = useState();
  // the device id for delete
  const [idForDelete, setIdForDelete] = useState();
  // devices for table
  const DATATABLE = useSelector((state) => state.device.devicesData);
  const loading = useSelector((state) => state.device.loading);

  // load device table
  const LoadTableData = () => {
    dispatch(ChangeLoading());
    dispatch(GroupTable(user.accessToken));

    var url = process.env.REACT_APP_HTTP + "/api/admin/devices/";

    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    var tDevicesData = [];
    var noTable = 1;
    // load device table API
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data.data.count);
        dispatch(CountDevices(res.data.data.count));
        if (tDevicesData.length === 0) {
          res.data.data.devices.map((device) => {
            device.nom = noTable;
            device.key = device.id;
            tDevicesData.push(device);
            noTable++;
          });
        }
        // refresh device table
        dispatch(LoadTable(tDevicesData));
        dispatch(ChangeLoading());
      })
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
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
      })
      .then(LoadTableData())
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };
  // check expired time for access token
  useEffect(() => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow ? ReNewAccessToken() : LoadTableData();
  }, [user.expAccessToken]);

  const data = DATATABLE;

  // columns of device table
  const columns = [
    {
      title: "No.",
      dataIndex: "nom",
      key: "nom",
      width: "4%",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "16%",
      align: "center",
    },
    {
      title: "IP/Domain name",
      dataIndex: "ipDomain",
      key: "ipDomain",
      width: "16%",
      align: "center",
    },
    {
      title: "Device type",
      dataIndex: "deviceType",
      key: "deviceType",
      width: "8%",
      align: "center",
    },

    {
      title: "Port",
      dataIndex: "port",
      key: "port",
      width: "8%",
      align: "center",
    },
    {
      title: "Device model",
      dataIndex: "deviceModel",
      key: "deviceModel",
      width: "14%",
      align: "center",
    },
    {
      title: "Online status",
      dataIndex: "status",
      key: "status",
      width: "8%",
      align: "center",
      render: (_, record) => (
        <span size="middle">
          {record ? (
            <span>
              <Online
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "-4px 2px",
                  padding: "1px",
                }}
              />
              Online
            </span>
          ) : (
            <span>
              <Offline
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "-4px 2px",
                  padding: "1px",
                }}
              />
              Offline
            </span>
          )}
        </span>
      ),
    },
    {
      title: "Serial number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width: "14%",
      align: "center",
    },
    {
      title: "Operation",
      dataIndex: "Action",
      key: "Action",
      width: "8%",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {/* edit thedevice with id */}
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              setIdForEdit(record.id);
              setIsAddModalVisible(true);

              // setIsCheckModalVisible(true);
              // setIsModalOpen(true);
            }}
          >
            <EditDefault style={{ width: "18px", height: "18px" }} />
          </a>
          {/* delete thedevice with id */}
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              setIdForDelete(record.id);
              setIsModalOpen(true);
            }}
          >
            <Delete style={{ width: "18px", height: "18px" }} />
          </a>
        </Space>
      ),
    },
  ];
  // clear id for delete modal
  const ClearidForEdit = () => {
    setIdForEdit();
    console.log("idForEdit " + idForEdit);
  };

  // delete device
  const deleteFromTable = () => {
    dispatch(ChangeLoading());
    var url = process.env.REACT_APP_HTTP + "/api/admin/devices/" + idForDelete;

    // var authorizationBasic = window.btoa(user + ":" + pass);
    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var tDevicesData = [];
    var noTable = 1;

    // Send info to delete device API
    axios
      .delete(url, config)
      .then((res) => {
        console.log(res.data.data.count);
        dispatch(CountDevices(res.data.data.count));
        if (tDevicesData.length === 0) {
          res.data.data.devices.map((device) => {
            device.nom = noTable;
            device.key = device.id;
            tDevicesData.push(device);
            noTable++;
          });
        }
        OpenNotification("topRight", "", res.data.msg, "");
        dispatch(LoadTable(tDevicesData));
        dispatch(ChangeLoading());
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };

  // select device for delete
  const onSelectChange = (newSelectedRowKeys) => {
    console.log(newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    dispatch(SelectRowForDelete(newSelectedRowKeys));
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // show edit modal device
  const handleOkManual = () => {
    setIsAddModalVisible(false);
  };
  // delete device and close modal
  const handleOk = () => {
    deleteFromTable();
    setIsModalOpen(false);
  };

  // close check password modal
  const handleCheckOk = (e) => {
    if (e) {
      setIsCheckModalVisible(false);
    } else {
      setIsCheckModalVisible(false);
      setIsAddModalVisible(true);
    }
  };
  // close delete modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // close edit modal device
  const handleCancelManual = () => {
    setIsAddModalVisible(false);
  };
  return (
    <Row style={{ height: "calc(100% - 3rem)" }}>
      <Col span={24} style={{ padding: "0 0.5rem" }}>
        {/* device table */}
        <Table
          bordered={true}
          className="devices-table"
          rowSelection={rowSelection}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          columns={columns}
          dataSource={data}
          style={{ borderRadius: "5px" }}
          scroll={{ y: "calc(100vh - 11rem)", x: 500 }}
          loading={loading}
          pagination={false}
        />
        {/* modal edit device */}
        <ModalAddDevice
          idForEdit={idForEdit}
          handleOkManual={handleOkManual}
          handleCancelManual={handleCancelManual}
          isAddModalVisible={isAddModalVisible}
          titleModal={"Modify Device"}
          ClearidForEdit={ClearidForEdit}
        />
        {/*  modal check password */}
        <ModalCheckPassword
          handleOkManual={handleCheckOk}
          isCheckModalVisible={isCheckModalVisible}
        />
        {/* modal delete device */}
        <ModalDeleteDevice
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          textModal="Are you sure to delete the device?"
        />
        {/* <ModalDeleteDemo isModalOpen={isModalOpen} handleOk={handleOk} /> */}
      </Col>
    </Row>
  );
};

export default TableDevicePage;
