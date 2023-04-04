import React from "react";

import { Col, Progress, Space, Table } from "antd";
import "./playback-exporting.styles.scss";

import {
  Cancel,
  Download,
} from "../../../assets/Icons/JSXs/index";

const PlayBackExporting = ({ playerRefObjectOnPlayer }) => {
  // const [idForEdit, setIdForEdit] = useState();
  // const [idForDelete, setIdForDelete] = useState();
  // const [LOADING, setLOADING] = useState(false);

  // const [selectionType, setSelectionType] = useState("checkbox");

  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //   },
  //   getCheckboxProps: (record) => ({
  //     disabled: record.name === "Disabled User",
  //     // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };

  const dataSource = [
    {
      key: "1",
      all: "1",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "2",
      all: "2",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "3",
      all: "3",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "4",
      all: "2",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "5",
      all: "5",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "6",
      all: "6",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "7",
      all: "7",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
    {
      key: "8",
      all: "8",
      startdate: "2022-11-19 12:36:08",
      enddate: "2022-11-19 12:36:08",
      size: "63.59",
    },
  ];

  const columns = [
    
    {
      title: "Start Date",
      dataIndex: "startdate",
      key: "startdate",
      width: "22%",
    },
    {
      title: "End Date",
      dataIndex: "enddate",
      key: "enddate",
      width: "22%",
    },
    {
      title: "Size(MB)",
      dataIndex: "size",
      key: "size",
      width: "14%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <Progress percent={30} />
        </Space>
      ),
    },
    {
      title: "Opration",
      dataIndex: "opration",
      key: "opration",
      width: "14%",
      render: (_, record) => (
        <Space >
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              // setIdForEdit(record.id);
            }}
          >
            <Cancel style={{ width: "18px", height: "18px" }} />
          </a>
          <a
            onClick={() => {
              console.log("record.id " + record.id);
              // setIdForDelete(record.id);
            }}
          >
            <Download style={{ width: "18px", height: "18px" }} />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <Col span={24} style={{ height: "100%" }} id="live_view_container">
      <Table
        scroll={{ x: 250, y: 250 }}
        dataSource={dataSource}
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        style={{ borderRadius: "5px" }}
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        // loading={LOADING}
        pagination={false}
      />
    </Col>
  );
};

export default PlayBackExporting;
