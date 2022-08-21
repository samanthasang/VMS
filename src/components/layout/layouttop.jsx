import { Col, Row, Menu, Dropdown, Space, Image } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoginPage from "../../pages/loginpage/loginpage.component";
import { DownOutlined } from "@ant-design/icons";

import { NitificationIcon } from "../../assets/Notification";
import { UserAvatarIcon } from "../../assets/UserAvatar";
import { DeropDownIcon } from "../../assets/DropDown";
import LogoIcon from "../../assets/Logo.svg";
import { logoutUser } from "../../redux/action/registerAction";

import LogoLogin from "../../assets/Logo-Login.svg";
import "./layout.styles.scss";
import { useDispatch, useSelector } from "react-redux";

const LayoutTop = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isLogedIn = useSelector((state) => state.register.isLogedIn);
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
          height: "50px",
        }}
      >
        <img
          src={LogoIcon}
          alt=""
          style={{
            position: "absolute",
            width: "120px",
            height: "50px",
          }}
        />
        <Menu
          defaultSelectedKeys={["Liveview"]}
          mode="horizontal"
          theme="dark"
          style={{ height: "50px" }}
        >
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              style={{
                right: "100px",
                position: "absolute",
                width: "60px",
                padding: "5px",
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
      </Col>
    </Row>
  );
};

export default LayoutTop;
