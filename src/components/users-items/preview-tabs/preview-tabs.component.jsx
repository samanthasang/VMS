import { Input, Tree, Button, Space, Dropdown, Menu } from "antd";
import React, { useMemo, useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import {
  DefaultGroup,
  Cam1Default,
  Newgroup,
} from "../../../assets/Icons/JSXs/index";
import { CaretDownOutlined } from "@ant-design/icons";
import "./preview-tabs.styles.scss";
import extractData from "../../../components/live-view-items/liveview/extractData";
import { useSelector } from "react-redux";
import ModalAddGroup from "../../generals-items/modal-add-group/modal-add-group.component";
import { useEffect } from "react";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import ModalDeleteGroup from "../../generals-items/modal-delete-group/modal-delete-group.component";
import ModalRenameGroup from "../../generals-items/modal-rename-group/modal-rename-group.component";
import { UserLogOut } from "../../../redux/login_redux/loginAction";
const { Search } = Input;

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    console.log("NODE : " + JSON.stringify(data[i]));
    console.log("key : " + key);
    dataList.push({
      key,
      title: key,
      // strTitle,
      // key: item.key,
      // id: item.id,
      // icon,
      // hrefm,
      // href,
      // strcol,
      // strcols,
      // strcols2,
      // groupID: item.groupID,
    });
    if (node.children) {
      generateList(node.children);
    }
  }
};

const PreviewTabs = () => {
  const dispatch = useDispatch();
  const treeDataa = useSelector((state) => state.liveView.Organization);
  const user = useSelector((state) => state.login.user);
  const [isModalOpen, setIsAddModalVisible] = useState(false);
  const [isModalOpenGroup, setIsAddModalVisibleGroup] = useState(false);
  const [isModalOpenRenameGroup, setIsAddModalVisibleRenameGroup] =
    useState(false);
  const [isModalOpenAddGroup, setIsAddModalVisibleAddGroup] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [gData, setGData] = useState(false);
  const [expande, setExpande] = useState(false);
  const [draggable, setDraggable] = useState(false);
  const [searchFieldTree, setSearchFieldTree] = useState("");
  const [getKey, setGetKey] = useState({
    id: 0,
    parentkey: 0,
    title: "",
  });

  const GetOrganization = async () => {
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/tree";

    var accessToken = user.accessToken;
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    await axios
      .get(url, config)
      .then((res) => {
        console.log(res.data.data);
        const dt = extractData(res.data.data);
        console.log("OB" + dt);
        dispatch(SetOrganization(dt));
      })
      .catch((e) => 
        {
          {
            e.response.status === 401 && dispatch(UserLogOut());
          }
          console.log(e);
        });
  };

  useEffect(() => {
    GetOrganization();
    console.log("get Organization");
  }, []);

  // generateList(treeDataa);
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
  const onExpand = (newExpandedKeys) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  const onClickNewChild = ({ key, label, children }) => {
    if (key === "1") {
      setIsAddModalVisibleAddGroup(true);
    }
    if (key === "2") {
      setIsAddModalVisibleRenameGroup(true);
    }
    if (key === "3") {
      setIsAddModalVisibleGroup(true);
    }
  };
  const menu = (
    <Menu
      onClick={onClickNewChild}
      items={[
        {
          label: "New Group",
          key: "1",
        },
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
  const Dodraggable = () => {
    setDraggable(!draggable);
  };

  const onChange = (e) => {
    console.log("e " + e.target.value);
    setSearchFieldTree(e.target.value);
    // const { value } = e.target;
    // console.log("value " + value);
    // const newExpandedKeys = treeDataa
    //   .map((item) => {
    //     console.log("item " + JSON.stringify(item));
    //     console.log("item title " + item.title);
    //     console.log("item title indexOf " + item.id);
    //     if (item.groupID > -1) {
    //       setExpandedKeys(item.id);
    //       setExpande(true);
    //       return getParentKey(item.key, treeDataa);
    //     }

    //     return null;
    //   })
    //   .filter((item, i, self) => item && self.indexOf(item) === i);
    // console.log("newExpandedKeys" + newExpandedKeys);
    // setExpandedKeys(newExpandedKeys);
    // setSearchValue(value);
    // setAutoExpandParent(true);
  };

  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        var icon = <Cam1Default />;
        if (item.icon === 1) {
          icon = <DefaultGroup />;
        } else {
          icon = <Cam1Default />;
        }
        const hrefm = item.mainStreamURL;
        const href = item.subStreamURL;
        const strcol = item.colCountKey;
        const strcols = item.colCountKeys;
        const strcols2 = item.colCountKeys2;

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
            strTitle,
            key: item.key,
            icon,
            id: item.id,
            groupID: item.groupID,
            children: loop(item.children),
          };
        }

        return {
          title,
          strTitle,
          key: item.key,
          id: item.id,
          icon,
          hrefm,
          href,
          strcol,
          strcols,
          strcols2,
          groupID: item.groupID,
        };
      });
    const filtertree = (data) => {
      var jTrees = [];
      data.map((item) => {
        const strTitle = item.title;
        var icon = <Cam1Default />;
        if (item.icon === 1) {
          icon = <DefaultGroup />;
        } else {
          icon = <Cam1Default />;
        }
        const hrefm = item.mainStreamURL;
        const href = item.subStreamURL;
        const strcol = item.colCountKey;
        const strcols = item.colCountKeys;
        const strcols2 = item.colCountKeys2;

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

        var jTree = {
          title,
          strTitle,
          key: item.key,
          icon,
          id: item.id,
          groupID: item.groupID,
        };
        if (strTitle.toLowerCase().includes(searchFieldTree.toLowerCase())) {
          jTrees.push(jTree);
        }
        if (item.children && item.children.length) {
          item.children.map((item) => {
            const strTitle = item.title;
            var icon = <Cam1Default />;
            if (item.icon === 1) {
              icon = <DefaultGroup />;
            } else {
              icon = <Cam1Default />;
            }
            const hrefm = item.mainStreamURL;
            const href = item.subStreamURL;
            const strcol = item.colCountKey;
            const strcols = item.colCountKeys;
            const strcols2 = item.colCountKeys2;

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
            var jTree = {
              title,
              strTitle,
              key: item.key,
              id: item.id,
              icon,
              hrefm,
              href,
              strcol,
              strcols,
              strcols2,
              groupID: item.groupID,
            };
            if (
              strTitle.toLowerCase().includes(searchFieldTree.toLowerCase())
            ) {
              jTrees.push(jTree);
            }
          });
        }
      });
      return jTrees;
    };
    if (searchFieldTree !== "") {
      console.log("filtertree");
      return filtertree(treeDataa);
    } else {
      console.log("loop");
      return loop(treeDataa);
    }
  }, [searchFieldTree, treeDataa]);

  const onDragEnter = (info) => {
    console.log(info);
  };

  const onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }

        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };

    const data = [...gData]; // Find dragObject

    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || []; // where to insert 示例添加到头部，可以是随意位置

        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || []; // where to insert 示例添加到头部，可以是随意位置

        item.children.unshift(dragObj); // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar = [];
      let i;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });

      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    console.log(info.dragNode.id);
    console.log(info.dragNode.strTitle);
    console.log(info.node.id);

    setGData(data);
    handledropApi(info.dragNode.id, info.dragNode.strTitle, info.node.id);
  };
  const handledropApi = (id, title, pid) => {
    console.log(title);
    console.log(id);
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/" + id;

    var accessToken = user.accessToken;
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    var value = {
      name: title,
      groupID: pid,
    };
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    axios
      .put(url, value, config)
      .then((res) => {
        console.log(res.data.data);
        const dt = extractData(res.data.data);
        console.log("OB" + dt);
        dispatch(SetOrganization(dt));
      })
      .catch((e) => console.log(e));
  };

  const handleManual = () => {
    setIsAddModalVisible(true);
  };
  const handleOkManual = () => {
    setIsAddModalVisible(false);
  };
  const handleOkRenameGroup = () => {
    setIsAddModalVisibleRenameGroup(false);
  };
  const handleOkAddGroup = () => {
    setIsAddModalVisibleAddGroup(false);
  };
  const handleOkGroup = () => {
    setIsAddModalVisibleGroup(false);
  };

  const handleOkAndContinueManual = () => {};

  const handleCancelManual = () => {
    setIsAddModalVisible(false);
  };
  return (
    <>
      <Search
        className="search_tab"
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />

      <ModalAddGroup
        handleOkManual={handleOkManual}
        handleOkAndContinueManual={handleOkAndContinueManual}
        handleCancelManual={handleCancelManual}
        isModalOpen={isModalOpen}
        ModalName="Group"
        getKey={0}
      />
      {/* <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Danger
      </Dropdown.Button> */}
      <Tree
        rootClassName="preview-tree"
        showIcon
        switcherIcon={<CaretDownOutlined />}
        height={380}
        // onExpand={onExpand}
        // expandedKeys={expandedKeys}
        // autoExpandParent={autoExpandParent}
        onDoubleClick={Dodraggable}
        // onMouseLeave={Dontdraggable}
        defaultExpandAll={true}
        // treeData={treeData}
        draggable={draggable}
        blockNode
        // defaultExpandAll={true}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        treeData={treeData}
      />
      <ModalDeleteGroup
        isModalOpenGroup={isModalOpenGroup}
        handleCancelGroup={handleOkGroup}
        handleOkGroup={handleOkGroup}
        ModalName="Group"
        getKey={getKey}
      />
      <ModalRenameGroup
        isModalOpenGroup={isModalOpenRenameGroup}
        handleCancelGroup={handleOkRenameGroup}
        handleOkGroup={handleOkRenameGroup}
        ModalName="Group"
        getKey={getKey}
      />
      <ModalAddGroup
        isModalOpen={isModalOpenAddGroup}
        handleCancelManual={handleOkAddGroup}
        handleOkManual={handleOkAddGroup}
        ModalName="Group"
        getKey={getKey}
      />
    </>
  );
};

export default PreviewTabs;
