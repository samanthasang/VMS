import React, { useState } from "react";
import { Col, Row, Button, Space, Table, Tag } from "antd";

import "./devicespage.styles.scss";

const DevicesPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "No.",
      dataIndex: "nom",
      key: "nom"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "IP/Domain Name",
      dataIndex: "ip",
      key: "ip"
    },
    {
      title: "Device Type",
      dataIndex: "type",
      key: "type"
    },

    {
      title: "Port",
      dataIndex: "port",
      key: "port"
    },
    {
      title: "Channel Number",
      dataIndex: "channel",
      key: "channel"
    },
    {
      title: "Online Status",
      dataIndex: "online",
      key: "online",
      render: (text) => <span style={{ color: " red" }}>{text}</span>
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation"
    }
  ];

  const data = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      key: i,
      nom: i,
      name: `Edward King ${i}`,
      ip: `London, Park Lane no. ${i}`,
      type: 32,
      port: 32,
      online: 32,
      channel: 32,
      operation: 32
    });
  }

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Row className="orginal_screen">
      <Col span={24} className="window_screen" style={{ color: "red" }}>
        <Row style={{ height: "3rem" }}>
          <Col span={16} style={{ backgroundColor: "pink" }}>
            <Button className="header_btn" type="primary">
              Add
            </Button>
            <Button className="header_btn" type="primary">
              Delete
            </Button>
            <Button className="header_btn" type="primary">
              Import
            </Button>
            <Button
              className="header_btn"
              type="primary"
              onClick={() => {
                console.log(data);
              }}
            >
              <a href="/cameraExport.txt" download={data}>
                Export
              </a>
            </Button>
          </Col>
          <Col span={8} style={{ backgroundColor: "lightblue" }}>
            <span>
              <span>All Devices: </span>
              <span>7</span>
            </span>
            <span>
              <span>Online Devices: </span>
              <span>6</span>
            </span>
          </Col>
        </Row>
        <Row style={{ height: "calc(100% - 3rem)" }}>
          <Col span={24} style={{ backgroundColor: "orange" }}>
            <Table
              className="devices-table"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DevicesPage;
