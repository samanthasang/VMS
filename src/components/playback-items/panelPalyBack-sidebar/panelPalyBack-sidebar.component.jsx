import { Col, Input, Tree } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./panelPalyBack-sidebar.styles.scss";
import { useDispatch } from "react-redux";
import DatePickerSideBar from "../date-picker-sidebar/date-picker-sidebar.component";
import { useSelector } from "react-redux";
import axios from "axios";
import extractData from "../../live-view-items/liveview/extractData";
import { SetOrganization } from "../../../redux/liveView_redux/liveViewAction";
import { DefaultGroup, Cam1Default } from "../../../assets/Icons/JSXs/index";
import {
  CameraChecked,
  CameraID,
} from "../../../redux/playback_redux/playbackAction";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";

const { Search } = Input;

const PanelPalyBack = () => {
  const dispatch = useDispatch();
  // get the user information

  const user = useSelector((state) => state.login.user);
  // getting tree data from redux
  const treeDataa = useSelector((state) => state.liveView.Organization);
  // getting info fron search input
  const [searchValue, setSearchValue] = useState("");
  // getting info fron search input
  const [searchFieldTree, setSearchFieldTree] = useState("");
  // ebable or disable camera check box
  const [disableCheckbox, setDisableCheckbox] = useState(false);
  // const [idForGetDate, setIdForGetDate] = useState(null);

  // camera id
  const [cameraID, setCameraID] = useState(null);

  // get organization data from API
  const GetOrganization = async () => {
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
        // e.response.status === 401 && dispatch(UserLogOut());
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
  // check access token
  useEffect(() => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow ? ReNewAccessToken() : GetOrganization();

    console.log("get Organization");
  }, [user.expAccessToken]);

  // getting info from search input
  const onChange = (e) => {
    console.log("e " + e.target.value);
    setSearchFieldTree(e.target.value);
  };

  // getting organization data & change to antd tree data
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
        var disablebox = false;
        if (item.id !== cameraID && disableCheckbox) {
          disablebox = true;
        } else {
          disablebox = false;
        }
        const hrefm = item.src2;
        const href = item.src;
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
            disableCheckbox: true,
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
          disableCheckbox: disablebox,
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
        var disablebox = false;
        if (item.id !== cameraID && disableCheckbox) {
          disablebox = true;
        } else {
          disablebox = false;
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
          disableCheckbox: true,
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
            var disablebox = false;
            if (item.id !== cameraID && disableCheckbox) {
              disablebox = true;
            } else {
              disablebox = false;
            }
            const hrefm = item.src2;
            const href = item.src;
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
            if (item.children && item.children.length) {
              item.children.map((item) => {
                const strTitle = item.title;
                var icon = <Cam1Default />;
                if (item.icon === 1) {
                  icon = <DefaultGroup />;
                } else {
                  icon = <Cam1Default />;
                }
                var disablebox = false;
                if (item.id !== cameraID && disableCheckbox) {
                  disablebox = true;
                } else {
                  disablebox = false;
                }
                const hrefm = item.src2;
                const href = item.src;
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
                  disableCheckbox: disablebox,
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
              disableCheckbox: true,
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
  }, [searchFieldTree, treeDataa, disableCheckbox]);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  // getting the canera information on checking the camera check box
  const onCheck = (checkedKeys, info, checkedIds) => {
    console.log("onCheck", info.node.id, info.node.href);
    console.log("info.node.id" + info.node.id);
    // setIdForGetDate(info.node.id);
    setCameraID(info.node.id);
    dispatch(CameraID(info.node.id));
    dispatch(CameraChecked(checkedKeys));
    if (checkedKeys.length === 1) {
      setDisableCheckbox(true);
    } else {
      setDisableCheckbox(false);
    }
  };

  return (
    <Col span={24} className="panel_paly_back">
      {/* serach input for tree */}
      <Search
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />
      {/* tree data  */}
      <Tree
        showIcon
        checkable
        selectable={false}
        onCheck={onCheck}
        switcherIcon={<CaretDownOutlined />}
        blockNode
        treeData={treeData}
      />
      {/* date picker for chosing the date & time for the selected camera */}
      <DatePickerSideBar />
    </Col>
  );
};

export default PanelPalyBack;
