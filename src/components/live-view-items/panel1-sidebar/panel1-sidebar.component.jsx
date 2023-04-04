import { Input, Tree, Button, Space, Dropdown, Menu } from "antd";
import React, { useMemo, useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import {
  DefaultGroup,
  Cam1Default,
  Newgroup,
} from "../../../assets/Icons/JSXs/index";
import { CaretDownOutlined } from "@ant-design/icons";
import "./panel1-sidebar.styles.scss";
import extractData from "../liveview/extractData";
import { useSelector } from "react-redux";
import ModalAddGroup from "../../generals-items/modal-add-group/modal-add-group.component";
import { useEffect } from "react";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import ModalDeleteGroup from "../../generals-items/modal-delete-group/modal-delete-group.component";
import ModalRenameGroup from "../../generals-items/modal-rename-group/modal-rename-group.component";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import OpenNotification from "../../form-items/notification/notification.component";
const { Search } = Input;

const Panel1 = () => {
  const dispatch = useDispatch();
  // get the user information
  const user = useSelector((state) => state.login.user);

  // get the organization
  const treeDataa = useSelector((state) => state.liveView.Organization);
  //  visibilty of modal add new group to organization
  const [isModalOpen, setIsAddModalVisible] = useState(false);
  //  visibilty of modal delete group to organization
  const [isModalOpenGroup, setIsAddModalVisibleGroup] = useState(false);
  //  visibilty of modal rename group to organization
  const [isModalOpenRenameGroup, setIsAddModalVisibleRenameGroup] =
    useState(false);
  //  visibilty of modal add new group
  const [isModalOpenAddGroup, setIsAddModalVisibleAddGroup] = useState(false);

  // get the search value
  const [searchValue, setSearchValue] = useState("");
  // change dagaable for child tree
  const [draggable, setDraggable] = useState(false);
  // get the search value
  const [searchFieldTree, setSearchFieldTree] = useState("");
  // get the id & parent id & title of group for renameing the group and drop group to another group
  const [getKey, setGetKey] = useState({
    id: 0,
    parentkey: 0,
    title: "",
  });

  // get organization data from API
  const GetOrganization = async () => {
    console.log("get Organization");
    console.log("get Organization    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/tree";

    var accessToken = user.accessToken;
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
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };
  // renew access token API
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
        res.status === 200 && GetOrganization();
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };
  // renew the access token for drop groups API
  const ReNewAccessTokendropApi = async (id, strTitle, nodeid) => {
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
        res.status === 200 && handledropApi(id, strTitle, nodeid);
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };

  // check access token
  useEffect(() => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow ? ReNewAccessToken() : GetOrganization();
  }, [user.expAccessToken]);

  // clicking on children in tree
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
  // clicking on children has child in tree
  const onClickHasChild = ({ key, label, children }) => {
    if (key === "1") {
      setIsAddModalVisibleAddGroup(true);
    }
    if (key === "2") {
      setIsAddModalVisibleRenameGroup(true);
    }
    if (key === "3") {
       OpenNotification("topRight", "You can not delete this group because it has a Camera/Subgroup", "", "");
    }
  };

  // menu for drop down groups in tree
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
  const menuhasChild = (
    <Menu
      onClick={onClickHasChild}
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

  // change dragable for groups in tree
  const Dodraggable = () => {
    setDraggable(!draggable);
  };

  // getting info from search input
  const onChange = (e) => {
    console.log("e " + e.target.value);
    setSearchFieldTree(e.target.value);
  };

  // getting the organization data and chenge it to tree data for antd tree component
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
        const hrefm = item.src2;
        const href = item.src;
        const strcol = item.colCountKey;
        const strcols = item.colCountKeys;
        const strcols2 = item.colCountKeys2;
        const hasDevice = item.hasDevice;
        const hasGroup = item.hasGroup;

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
            hasDevice,
            hasGroup,
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
          hasDevice,
          hasGroup,
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
            const hrefm = item.src2;
            const href = item.src;
            const strcol = item.colCountKey;
            const strcols = item.colCountKeys;
            const strcols2 = item.colCountKeys2;
            const hasDevice = item.hasDevice;
            const hasGroup = item.hasGroup;

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
            if (item.children && item.children.length) {
              item.children.map((item) => {
                const strTitle = item.title;
                var icon = <Cam1Default />;
                if (item.icon === 1) {
                  icon = <DefaultGroup />;
                } else {
                  icon = <Cam1Default />;
                }
                const hrefm = item.src2;
                const href = item.src;
                const strcol = item.colCountKey;
                const strcols = item.colCountKeys;
                const strcols2 = item.colCountKeys2;
                const hasDevice = item.hasDevice;
                const hasGroup = item.hasGroup;

                const index = strTitle.indexOf(searchValue);
                const beforeStr = strTitle.substring(0, index);
                const afterStr = strTitle.slice(index + searchValue.length);
                const title =
                  index > -1 ? (
                    <span>
                      {beforeStr}
                      <span className="site-tree-search-value">
                        {searchValue}
                      </span>
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
                  hasDevice,
                  hasGroup,
                };
                if (
                  strTitle.toLowerCase().includes(searchFieldTree.toLowerCase())
                ) {
                  jTrees.push(jTree);
                }
              });
            }
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
              hasDevice,
              hasGroup,
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

  // call handledropApi after droping the group to another group
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

    // const data = [...gData]; // Find dragObject
    const data = [...treeDataa]; // Find dragObject

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

    // setGData(data);
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessTokendropApi(
          info.dragNode.id,
          info.dragNode.strTitle,
          info.node.id
        )
      : handledropApi(info.dragNode.id, info.dragNode.strTitle, info.node.id);
  };

  // send data ti API after droping the group to another group
  const handledropApi = (id, title, pid) => {
    console.log(title);
    console.log(id);
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/" + id;

    var accessToken = user.accessToken;
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
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };

  // show modal add new group to organization
  const handleManual = () => {
    setIsAddModalVisible(true);
  };
  //  hide modal add new group to organization
  const handleOkManual = () => {
    setIsAddModalVisible(false);
  };

  // hide modal rename
  const handleOkRenameGroup = () => {
    setIsAddModalVisibleRenameGroup(false);
  };
  // hide modal add group
  const handleOkAddGroup = () => {
    setIsAddModalVisibleAddGroup(false);
  };

  // hide modal delete group
  const handleOkGroup = () => {
    setIsAddModalVisibleGroup(false);
  };

  //  hide modal add new group to organization
  const handleCancelManual = () => {
    setIsAddModalVisible(false);
  };
  return (
    <>
      {/* search bar for organization tree */}
      <Search
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />
      {/* button for add new group */}
      <Button
        onClick={handleManual}
        style={{
          width: "100%",
          textAlign: "left",
          marginBottom: "8px",
        }}
        className="new_group_btn"
      >
        <Space>
          <Newgroup />
          New Group
        </Space>
      </Button>
      {/* modal add new group to organization */}
      <ModalAddGroup
        handleOkManual={handleOkManual}
        handleCancelManual={handleCancelManual}
        isModalOpen={isModalOpen}
        ModalName="Group"
        getKey={0}
      />
      {/* tree for organization  */}
      <Tree
        showIcon
        switcherIcon={<CaretDownOutlined />}
        onDoubleClick={Dodraggable}
        draggable={draggable}
        blockNode
        selectable={false}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        treeData={treeData}
        titleRender={(gData) => (
          <a
            draggable
            onClick={(event) => event.preventDefault()}
            onMouseEnter={(event) =>
              console.log(gData.hasDevice + " " + gData.hasGroup)
            }
            href={[gData.href, gData.hrefm]}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {gData.title}
            {/* enable if tree children is a group */}
            {/* drop down for just group with add new group & rename & delete */}
            {/* camera doesnot have drop down */}
            {!gData.href && (
              <Dropdown
                trigger={["click"]}
                overlay={
                  gData.hasDevice || gData.hasGroup ? menuhasChild : menu
                }
                onClick={() => {
                  console.log(gData.strTitle);
                  setGetKey({
                    id: gData.id,
                    parentKey: gData.groupID,
                    title: gData.strTitle,
                  });
                }}
              >
                <MoreOutlined
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "20%",
                  }}
                />
              </Dropdown>
            )}
          </a>
        )}
      />
      {/* modal delte group */}
      <ModalDeleteGroup
        isModalOpenGroup={isModalOpenGroup}
        handleCancelGroup={handleOkGroup}
        handleOkGroup={handleOkGroup}
        ModalName="Group"
        getKey={getKey}
      />
      {/* modal rename group  */}
      <ModalRenameGroup
        isModalOpenGroup={isModalOpenRenameGroup}
        handleCancelGroup={handleOkRenameGroup}
        handleOkGroup={handleOkRenameGroup}
        ModalName="Group"
        getKey={getKey}
      />
      {/* moadl add group */}
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

export default Panel1;
