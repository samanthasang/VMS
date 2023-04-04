import { Input, Tree, Button, Space, Dropdown, Menu } from "antd";
import React, { useMemo, useState } from "react";
import { DeropDownIcon } from "../../../assets/DropDown";
import { MoreOutlined } from "@ant-design/icons";
import "./panel2-sidebar.styles.scss";
import {
  DefaultGroup,
  ViewPage,
  Newgroup,
} from "../../../assets/Icons/JSXs/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetVIews } from "../../../redux/liveView_redux/liveViewAction";
import { useEffect } from "react";
import ModalAddGroup from "../../generals-items/modal-add-group/modal-add-group.component";
const { Search } = Input;

const menu = (
  <Menu
    items={[
      {
        label: "Rename",
        key: "2",
      },
      {
        label: "Delete",
        key: "3",
      },
    ]}
  />
);

const Panel2 = () => {
  const dispatch = useDispatch();
  const defaultData = useSelector((state) => state.liveView.View);
  // const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [defaultDataArray, setDefaultDataArray] = useState(defaultData);
  const [isModalOpen, setIsAddModalVisible] = useState(false);

  useEffect(() => {
    setDefaultDataArray(defaultData);
  }, [defaultData]);

  // const onExpand = (newExpandedKeys) => {
  //   setExpandedKeys(newExpandedKeys);
  //   setAutoExpandParent(true);
  // };

  // const onChange = (e) => {
  //   const { value } = e.target;
  //   const newExpandedKeys = dataList
  //     .map((item) => {
  //       if (item.title.indexOf(value) > -1) {
  //         return getParentKey(item.key, defaultData);
  //       }

  //       return null;
  //     })
  //     .filter((item, i, self) => item && self.indexOf(item) === i);
  //   setExpandedKeys(newExpandedKeys);
  //   setSearchValue(value);
  //   setAutoExpandParent(true);
  // };

  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        var icon = <ViewPage />;
        if (item.icon === 1) {
          icon = <DefaultGroup />;
        } else {
          icon = <ViewPage />;
        }
        const strcol = item.Windows;
        const strcols = item.Windows_video;
        const strcols2 = item.Windows_single_video;

        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );

        if (item.children) {
          return {
            title,
            key: item.key,
            icon,
            children: loop(item.children),
          };
        }

        return {
          title,
          key: item.key,
          icon,
          strcol,
          strcols,
          strcols2,
        };
      });

    return loop(defaultDataArray);
  }, [searchValue, defaultDataArray, defaultData]);

  const onSelect = (selectedKeys, info) => {
    dispatch(
      SetVIews({
        Windows: info.strcol,
        Windows_video: info.strcols,
        Windows_single_video: info.strcols2,
      })
    );
    console.log("info", info.strcol);
    console.log("strcols", info.strcols);
    console.log("strcols2", info.strcols2);
    console.log("selectedKeys", selectedKeys);
  };
  const handleManual = () => {
    setIsAddModalVisible(true);
  };
  const handleOkManual = () => {
    setIsAddModalVisible(false);
  };

  const handleOkAndContinueManual = () => {};

  const handleCancelManual = () => {
    setIsAddModalVisible(false);
  };
  return (
    <>
      <Search
        style={{
          marginBottom: 8,
        }}
        // onExpand={onExpand}
        placeholder="Search"
        // onChange={onChange}
      />
      <Button
        onClick={handleManual}
        style={{ width: "100%", textAlign: "left" }}
      >
        <Space>
          <Newgroup />
          New View
        </Space>
      </Button>
      <ModalAddGroup
        handleOkManual={handleOkManual}
        handleOkAndContinueManual={handleOkAndContinueManual}
        handleCancelManual={handleCancelManual}
        isModalOpen={isModalOpen}
        ModalName="View"
      />
      <Tree
        showIcon
        height={500}
        switcherIcon={<DeropDownIcon />}
        treeData={treeData}
        blockNode
        onClick={onSelect}
        defaultExpandAll={true}
        titleRender={(defaultData) => (
          <a
            draggable
            // onDoubleClick={(e) => console.log(e.target.value)}
            // onClick={handleclick}
            // style={{
            //   pointerEvents: "none",
            // }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {defaultData.title}
            {!defaultData.href && (
              <Dropdown overlay={menu}>
                <MoreOutlined
                  style={{
                    position: "absolute",
                    right: "0",
                  }}
                />
              </Dropdown>
            )}
          </a>
        )}
      />
      {/* <Tree
        height={500}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        switcherIcon={<DeropDownIcon />}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={treeData}
      /> */}
    </>
  );
};

export default Panel2;
