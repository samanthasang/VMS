import React, { useState } from "react";

import { Col, Progress, Row, Space, Table } from "antd";
import "./user-pending.styles.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ChangeComponent,
  ChangeComUser,
} from "../../../redux/user-redux/userAction";
import {
  Cancel,
  Delete,
  Download,
  EditDefault,
  Success,
  Notaccept
} from "../../../assets/Icons/JSXs/index";

const UserPending = ({ playerRefObjectOnPlayer }) => {
  const dispatch = useDispatch();
  const [idForEdit, setIdForEdit] = useState();
  const [idForDelete, setIdForDelete] = useState();
  const [LOADING, setLOADING] = useState(false);
 
  const [selectionType, setSelectionType] = useState("checkbox");

  const dataSource = [
    {
      key: "1",
      all: "1",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "2",
      all: "2",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "3",
      all: "3",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "4",
      all: "4",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "5",
      all: "5",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "6",
      all: "6",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "7",
      all: "7",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "8",
      all: "8",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
    {
      key: "9",
      all: "9",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime:"2022-08-02    17:18:31"
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "all",
      key: "all",
      width: "4%",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      width: "16%",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      width: "16%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },
    {
      title: "Requst Time",
      dataIndex: "requesttime",
      key: "requesttime",
      width: "20%",
      
    },
    {
      title: "Opration",
      dataIndex: "opration",
      key: "opration",
      width: "8%",
      render: (_, record) => (
        <Space size="small">
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              setIdForEdit(record.id);
            }}
          >
            <Notaccept style={{ width: "18px", height: "18px" }} />
          </a>
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              setIdForDelete(record.id);
              dispatch(ChangeComponent(7));
            }}
          >
            <Success style={{ width: "18px", height: "18px" }} />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <Col span={24} style={{ height: "100%" }} id="live_view_container">
      <Table
        // scroll={{ x: 250, y: "100%" }}
        dataSource={dataSource}
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        style={{ borderRadius: "5px"}}
        loading={LOADING}
        pagination={false}
      />
    </Col>
  );
};

export default UserPending;
