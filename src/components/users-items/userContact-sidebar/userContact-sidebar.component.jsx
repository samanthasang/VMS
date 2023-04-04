import {
  Col,
  Row,
  Dropdown,
  Input,
  Menu,
  Tree,
  Card,
  Space,
  Tooltip,
} from "antd";
// import type { DataNode } from 'antd/es/tree';

import React, { useState, useEffect, useMemo } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Cam1Default, DefaultGroup } from "../../../assets/Icons/JSXs/index";
import { MoreOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./userContact-sidebar.styles.scss";
import {
  Role,
  Union,
  Userwhite,
  Addrole,
  Adduser,
} from "../../../assets/Icons/JSXs/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

import extractData from "../../live-view-items/liveview/extractData";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import {
  ChangeComponent,
  ChangeComUser,
} from "../../../redux/user-redux/userAction";
import ModalDeleteDevice from "../../generals-items/modal-delete-device/modal-delete-device.component";
import ModalDeleteUser from "../modal-delete-user/modal-delete-user.component";
import { UserLogOut } from "../../../redux/login_redux/loginAction";

const { Search } = Input;
// const x = 3;
// const y = 2;
// const z = 1;
// const defaultData: DataNode[] = [];

// const generateData = (_level: number, _preKey?: React.Key, _tns?: DataNode[]) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || defaultData;

//   const children = [];
//   for (let i = 0; i < x; i++) {
//     const key = `${preKey}-${i}`;
//     tns.push({ title: key, key });
//     if (i < y) {
//       children.push(key);
//     }
//   }
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   children.forEach((key, index) => {
//     tns[index].children = [];
//     return generateData(level, key, tns[index].children);
//   });
// };
// generateData(z);

// const dataList: { key: React.Key; title: string }[] = [];
// const generateList = (data: DataNode[]) => {
//   for (let i = 0; i < data.length; i++) {
//     const node = data[i];
//     const { key } = node;
//     dataList.push({ key, title: key as string });
//     if (node.children) {
//       generateList(node.children);
//     }
//   }
// };
// generateList(defaultData);

// const getParentKey = (key: React.Key, tree: DataNode[]): React.Key => {
//   let parentKey: React.Key;
//   for (let i = 0; i < tree.length; i++) {
//     const node = tree[i];
//     if (node.children) {
//       if (node.children.some(item => item.key === key)) {
//         parentKey = node.key;
//       } else if (getParentKey(key, node.children)) {
//         parentKey = getParentKey(key, node.children);
//       }
//     }
//   }
//   return parentKey!;
// };

const Usercontact = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user.user);
  const idForComponent = useSelector((state) => state.user.componentusers);
  const treeDataa = useSelector((state) => state.liveView.Organization);
  
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
    console.log("user id " + user.id);
    console.log("user firstname " + user.firstName);
    console.log("user lastname " + user.lastName);
    console.log("user e " + user.email);
  }, []);
  // const treeDataa = useSelector((state) => state.liveView.Organization);
  const [searchValue, setSearchValue] = useState("");
  const [searchFieldTree, setSearchFieldTree] = useState("");
  const [getId, setGetId] = useState("");

  const [getKey, setGetKey] = useState({
    id: 0,
    parentkey: 0,
    title: "",
    key: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [treeDisabled, setTreeDisabled] = useState(false);
  const [idTree, setIdTree] = useState({ id: "" });

  // const deleteBTN = () => {
  //   if (selectedRowKeys.length === 1) {
  //     console.log("selectedRowKeys changed 1: ", selectedRowKeys);
  //     setTextModal("Are you sure to delete the User?");
  //     setIsModalOpen(true);
  //   }
  //   if (selectedRowKeys.length > 1) {
  //     console.log("selectedRowKeys changed 2: ", selectedRowKeys);

  //     setTextModal("Are you sure you want to delete the selected User?");
  //     setIsModalOpen(true);
  //   }
  // };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onClickNewChild = ({ key }) => {
    if (key === "1") {
      // setIsAddModalVisibleAddGroup(true);
      dispatch(ChangeComUser(getKey.id));

      console.log("showedd   " + getKey.id);
      console.log("parentkey    " + getKey.parentkey);
      if (getKey.id == 1) {
        console.log("parentkey    " + getKey.parentkey);

        dispatch(ChangeComUser(getKey.id));
        dispatch(ChangeComponent(6));
      } else  {
        dispatch(ChangeComUser(getKey.id));
        dispatch(ChangeComponent(5));
      }
    }
    if (key === "2") {
      // setIsAddModalVisibleRenameGroup(true);
      console.log("showedd" + getKey.id);
      dispatch(ChangeComUser(getKey.id));
      // dispatch(setGetId(getKey.id));
      setIsModalOpen(true);
    }
  };
  const menu = (
    <Menu
      onClick={onClickNewChild}
      items={[
        {
          label: "Edit",
          key: "1",
        },
        {
          label: "Delete",
          key: "2",
        },
      ]}
    />
  );

  const onChange = (e) => {
    console.log("e " + e.target.value);
    

  };
  // const treeData = useMemo(() => {
  //   const loop = (data) =>
  //     data.map((item) => {
  //       const strTitle = item.title;
  //       var icon = <Cam1Default />;
  //       if (item.icon === 1) {
  //         icon = <DefaultGroup />;
  //       } else {
  //         icon = <Cam1Default />;
  //       }
  //       const hrefm = item.mainStreamURL;
  //       const href = item.subStreamURL;
  //       const strcol = item.colCountKey;
  //       const strcols = item.colCountKeys;
  //       const strcols2 = item.colCountKeys2;

  //       const index = strTitle.indexOf(searchValue);
  //       const beforeStr = strTitle.substring(0, index);
  //       const afterStr = strTitle.slice(index + searchValue.length);
  //       const title =
  //         index > -1 ? (
  //           <span>
  //             {beforeStr}
  //             <span className="site-tree-search-value">{searchValue}</span>
  //             {afterStr}
  //           </span>
  //         ) : (
  //           <span>{strTitle}</span>
  //         );

  //       if (item.children) {
  //         return {
  //           title,
  //           strTitle,
  //           key: item.key,
  //           icon,
  //           id: item.id,
  //           groupID: item.groupID,
  //           children: loop(item.children),
  //         };
  //       }

  //       return {
  //         title,
  //         strTitle,
  //         key: item.key,
  //         id: item.id,
  //         icon,
  //         hrefm,
  //         href,
  //         strcol,
  //         strcols,
  //         strcols2,
  //         groupID: item.groupID,
  //       };
  //     });
  //   const filtertree = (data) => {
  //     var jTrees = [];
  //     data.map((item) => {
  //       const strTitle = item.title;
  //       var icon = <Cam1Default />;
  //       if (item.icon === 1) {
  //         icon = <DefaultGroup />;
  //       } else {
  //         icon = <Cam1Default />;
  //       }

  //       const index = strTitle.indexOf(searchValue);
  //       const beforeStr = strTitle.substring(0, index);
  //       const afterStr = strTitle.slice(index + searchValue.length);
  //       const title =
  //         index > -1 ? (
  //           <span>
  //             {beforeStr}
  //             <span className="site-tree-search-value">{searchValue}</span>
  //             {afterStr}
  //           </span>
  //         ) : (
  //           <span>{strTitle}</span>
  //         );

  //       var jTree = {
  //         title,
  //         strTitle,
  //         key: item.key,
  //         icon,
  //         id: item.id,
  //         groupID: item.groupID,
  //       };
  //       if (strTitle.toLowerCase().includes(searchFieldTree.toLowerCase())) {
  //         jTrees.push(jTree);
  //       }
  //       if (item.children && item.children.length) {
  //         item.children.map((item) => {
  //           const strTitle = item.title;
  //           var icon = <Cam1Default />;
  //           if (item.icon === 1) {
  //             icon = <DefaultGroup />;
  //           } else {
  //             icon = <Cam1Default />;
  //           }
  //           const hrefm = item.mainStreamURL;
  //           const href = item.subStreamURL;
  //           const strcol = item.colCountKey;
  //           const strcols = item.colCountKeys;
  //           const strcols2 = item.colCountKeys2;

  //           const index = strTitle.indexOf(searchValue);
  //           const beforeStr = strTitle.substring(0, index);
  //           const afterStr = strTitle.slice(index + searchValue.length);
  //           const title =
  //             index > -1 ? (
  //               <span>
  //                 {beforeStr}
  //                 <span className="site-tree-search-value">{searchValue}</span>
  //                 {afterStr}
  //               </span>
  //             ) : (
  //               <span>{strTitle}</span>
  //             );
  //           var jTree = {
  //             title,
  //             strTitle,
  //             key: item.key,
  //             id: item.id,
  //             icon,
  //             hrefm,
  //             href,
  //             strcol,
  //             strcols,
  //             strcols2,
  //             groupID: item.groupID,
  //           };
  //           if (
  //             strTitle.toLowerCase().includes(searchFieldTree.toLowerCase())
  //           ) {
  //             jTrees.push(jTree);
  //           }
  //         });
  //       }
  //     });
  //     return jTrees;
  //   };
  //   if (searchFieldTree !== "") {
  //     console.log("filtertree");
  //     return filtertree(treeDataa);
  //   } else {
  //     console.log("loop");
  //     return loop(treeDataa);
  //   }
  // }, [searchFieldTree, treeDataa]);

  const treeData = [
    {
      title: "Admin",
      id:"1",
      key: "1",
      icon: <Role />,
      children: [
        {
          title: "Admin",
          key: "2",
          id:"2",
          icon: <Userwhite />,
        },
        // {
        //   title: "Admin",
        //   key: "0-0-1",
        //   icon: <Userwhite />,
        // },
      ],
    },
  ];

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  const onclickRole = () => {
    console.log("role");
    dispatch(ChangeComponent(1));
    dispatch(ChangeComUser(0));
  };
  const onclickUser = () => {
    console.log("User");
    dispatch(ChangeComponent(2));
  };
  const onclickUsers = () => {
    console.log("Userrrrrrrrrrrrrrr");
    dispatch(ChangeComponent(3));
  };
  const onclickUserId = () => {
    console.log("iddddd");
    dispatch(ChangeComponent(4));
  };
  // const onClickUser = () => {
  //   console.log(gData.strTitle);
  //   setGetKey({
  //     id: gData.id,
  //     parentKey: gData.groupID,
  //     title: gData.strTitle,
  //   });
  // };
  const showId = (key) => {
    // setTreeDisabled(true);
    console.log("showid heh  :" + key);
    // if(key==null){

    // }else{

    //   dispatch(ChangeComUser(key));
    // }

    {
      if (typeof key == "number") {
        dispatch(ChangeComUser(key));
        console.log('iskey   ' + key);
      }
    }
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col className="sidebar-info" span={24} style={{ height: "100%" }}>
        <Card
          title="User and Role"
          size="small"
          style={{
            background: "#2E333D",
            border: "none",
            color: "white",
            height: "100%",
          }}
        >
          <Tooltip title="Add Role">
            <Addrole onClick={onclickRole} style={{ cursor: "pointer" }} />
          </Tooltip>
          <Tooltip title="Request">
            <Adduser onClick={onclickUser} style={{ cursor: "pointer" }} />
          </Tooltip>
          <Search
            style={{
              marginBottom: 8,
            }}
            placeholder="Search"
            onChange={onChange}
          />
          <Tree
            showIcon
            onSelect={showId}
            // onSelect={onclickUserId}
            // onSelect={e.target.id}
            // disabled={treeDisabled}
            onCheck={onCheck}
            switcherIcon={<CaretDownOutlined />}
            height={"100%"}
            defaultExpandAll={true}
            blockNode
            treeData={treeData}
            titleRender={(treeData) => (
              <a
                draggable
                // style={{
                //   pointerEvents: "none",
                // }}
                href={treeData.href}
                style={{
                  width: "100%",
                  height: "100%",
                  float: "right",
                }}
              >
                <span
                  onClick={(event) => {
                    event.preventDefault();
                    if (treeDisabled === false) {
                      if (treeData.groupID === 0) {
                        console.log("parentkey    " + getKey.parentkey);

                        dispatch(ChangeComponent(4));
                        dispatch(ChangeComUser(getKey.id));
                      } else {
                        dispatch(ChangeComponent(3));
                        dispatch(ChangeComUser(getKey.id));
                      }
                    } else {
                      event.preventDefault();
                    }
                    // onclickUsers();
                  }}
                >
                  {treeData.title}
                </span>

                <Dropdown
                  trigger={["click"]}
                  overlay={menu}
                  onClick={() => {
                    console.log("treedataaa" + treeData.key);
                    console.log("treedataaa id " + treeData.id);
                    console.log("treedataaa2  " + treeData.groupID);
                    console.log("treedataaa3  " + treeData.icon);

                    setGetKey({
                      id: treeData.id,
                      parentkey: treeData.groupID,
                      title: treeData.strTitle,
                      key: treeData.key,
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
              </a>
            )}
          />
        </Card>
        <ModalDeleteUser
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          getId={getId}
          // textModal={}
        />
      </Col>
    </Row>
  );
};

export default Usercontact;
