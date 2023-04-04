import React, { useState } from "react";

import { Col, Progress, Row, Space, Table } from "antd";
import "./user-history.styles.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
  Cancel,
  Delete,
  Download,
  EditDefault,
  Success,
  Notaccept,
  Accept,
  Notaccept2,
} from "../../../assets/Icons/JSXs/index";

const UserHistory = ({ playerRefObjectOnPlayer }) => {

  const [idForEdit, setIdForEdit] = useState();
  const [idForDelete, setIdForDelete] = useState();
  const [LOADING, setLOADING] = useState(false);
  const [iconStatus, setIconStatus] = useState(
    <Accept width="18px" height="18px" style={{display:"inline-block"}}/>
  );
  const [checkIcon,setCheckIcon]= useState(false)
  const [textIcon, setTextIcon] = useState(<span>Accepted</span>);
  const [selectionType, setSelectionType] = useState("checkbox");
  const requestIcon = () => {
    if ((checkIcon = true)) {
      console.log("V1");
      setIconStatus(<Accept width="18px" height="18px" style={{display:"inline-block"}}/>);
      setTextIcon(<span style={{color:"#fff" , cursor:"none",}}>Accepted</span>);
    } else if ((checkIcon = false)) {
      console.log("V1");
      setIconStatus(<Notaccept2 width="18px" height="18px" />);
      setTextIcon(<span style={{color:"#fff" , cursor:"none",}}>Declined</span>);
    }
  };

  const dataSource = [
    {
      key: "1",
      all: "1",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "2",
      all: "2",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "3",
      all: "3",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "4",
      all: "4",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "5",
      all: "5",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "6",
      all: "6",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "7",
      all: "7",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "8",
      all: "8",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
    },
    {
      key: "9",
      all: "9",

      firstname: "Amirali",
      lastname: "Javadi Moghadam",
      email: "email@example.com",
      requesttime: "2022-08-02    17:18:31",
      Oprationtime: "2022-08-02    17:18:31",
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
      width: "14%",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      width: "14%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "18%",
    },
    {
      title: "Requst Time",
      dataIndex: "requesttime",
      key: "requesttime",
      width: "18%",
    },
    {
      title: "Opration Time",
      dataIndex: "Oprationtime",
      key: "Oprationtime",
      width: "18%",
    },
    {
      title: "Opration",
      dataIndex: "opration",
      key: "opration",
      width: "10%",

      render: (_, record) => (
        <Space size="small">
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              setIdForEdit(record.id);
            }}
          >
          <span className="end-col-icon" style={{display:"flex",color:"#fff",cursor:"default"}}>
          {iconStatus}
            {textIcon}
          </span>
            
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
        style={{ borderRadius: "5px" }}
        loading={LOADING}
        pagination={false}
      />
    </Col>
  );
};

export default UserHistory;
