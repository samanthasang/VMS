import { Col, Row, Menu, Dropdown, Space, Image } from "antd";
import { NitificationIcon } from "../../assets/Notification";
import { UserAvatarIcon } from "../../assets/UserAvatar";
import { DeropDownIcon } from "../../assets/DropDown";
import LogoIcon from "../../assets/Logo.svg";
import { logoutUser } from "../../redux/action/registerAction";

import "./layout.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const LayoutTop = ({ hideHeaderPaths = [] }) => {
  const dispatch = useDispatch();

  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const handleOnClick = ({ key }) => {
    console.log(key);
    switch (key) {
      case "0":
        console.log("0");
        break;
      case "1":
        console.log("1");
        break;
      case "3":
        console.log("log: " + isLogedIn);
        dispatch(logoutUser());
        break;

      default:
        break;
    }
  };
  const menu = (
    <Menu
      onClick={handleOnClick}
      items={[
        {
          label: " Edit Profile",
          key: "0",
        },
        {
          label: "About",
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "Logout",
          key: "3",
        },
      ]}
    />
  );
  return (
    <Row className="side_nav">
      <Col
        style={{
          height: "80px",
          width: "100%",
          position: "absolute",
          top: "0",
          height: "6vh",
        }}
      >
        <img
          src={LogoIcon}
          alt=""
          style={{
            position: "absolute",
            width: "120px",
            height: "6vh",
          }}
        />
        <Menu
          defaultSelectedKeys={["Liveview"]}
          mode="horizontal"
          theme="dark"
          style={{ height: "6vh" }}
        >
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <a
              onClick={(e) => e.preventDefault()}
              style={{
                right: "115px",
                position: "absolute",
                width: "45px",
                padding: "5px",
                height: "45px",
              }}
            >
              <Space>
                <NitificationIcon />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="drop_down_menu"
              style={{
                right: "0",
                position: "absolute",
                right: "0",
                width: "115px",
                padding: "5px",
              }}
            >
              <Space>
                <UserAvatarIcon />
                Saman
                <DeropDownIcon />
              </Space>
            </a>
          </Dropdown>
        </Menu>
        <Outlet />
      </Col>
    </Row>
  );
};

export default LayoutTop;
