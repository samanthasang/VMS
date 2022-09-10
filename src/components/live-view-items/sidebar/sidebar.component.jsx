import { Col, Row, Input, Tree, Collapse } from "antd";
import React, { useMemo, useState } from "react";
import { DeropDownIcon } from "../../../assets/DropDown";

import "./sidebar.styles.scss";

const { Panel } = Collapse;
const { Search } = Input;
const x = 3;
const y = 2;
const z = 1;
const defaultData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || "0";
  const tns = _tns || defaultData;
  const children = [];

  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({
      title: key,
      key,
    });

    if (i < y) {
      children.push(key);
    }
  }

  if (_level < 0) {
    return tns;
  }

  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};

generateData(z);
const dataList = [];

const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({
      key,
      title: key,
    });

    if (node.children) {
      generateList(node.children);
    }
  }
};

generateList(defaultData);

const getParentKey = (key, tree) => {
  let parentKey;

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
            href: "google.com",
          },
        ],
      },
    ],
  },
];

const SideBar = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData);
        }

        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <a>
              {beforeStr}
              <a className="site-tree-search-value">{searchValue}</a>
              {afterStr}
            </a>
          ) : (
            <a
              draggable
              onClick={(event) => event.preventDefault()}
              // style={{
              //   pointerEvents: "none",
              // }}
              href={
                "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
              }
            >
              {strTitle}
            </a>
          );

        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }

        return {
          title,
          key: item.key,
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        };
      });

    return loop(defaultData);
  }, [searchValue]);
  return (
    <Row style={{ height: "100%" }}>
      <Col span={24} style={{ height: "100%" }}>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          accordion
          className="collapse_header"
        >
          <Panel header="This is panel header 1" key="1">
            <Search
              style={{
                marginBottom: 8,
              }}
              placeholder="Search"
              onChange={onChange}
            />
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              switcherIcon={<DeropDownIcon />}
              autoExpandParent={autoExpandParent}
              treeData={treeData}
              draggable
            />
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <Search
              style={{
                marginBottom: 8,
              }}
              placeholder="Search"
              onChange={onChange}
            />
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              switcherIcon={<DeropDownIcon />}
              defaultExpandedKeys={["0-0-0"]}
              draggable
              onSelect={onSelect}
              treeData={treeData}
            />
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default SideBar;
