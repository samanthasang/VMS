import { Col, Row, Menu, Dropdown, Space } from "antd";
import { NitificationIcon } from "../../assets/Notification";
import { UserAvatarIcon } from "../../assets/UserAvatar";
import { DeropDownIcon } from "../../assets/DropDown";
import LogoIcon from "../../assets/Logo.svg";
import { UserLogOut } from "../../redux/login_redux/loginAction";

import "./layout.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const LayoutTop = () => {
  const dispatch = useDispatch();

  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const user = useSelector((state) => state.login.user.user.firstName);
  const handleOnClick = ({ key }) => {
    console.log(key);
    switch (key) {
      case "0":
        console.log("0");
        console.log(user);
        break;
      case "1":
        console.log("1");
        break;
      case "3":
        console.log("log: " + isLogedIn);
        dispatch(UserLogOut());
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
          width: "100%",
          position: "absolute",
          top: "0",
          height: "3rem",
        }}
      >
        <img
          src={LogoIcon}
          alt=""
          style={{
            position: "absolute",
            width: "120px",
            height: "3rem",
          }}
        />
        <Menu
          defaultSelectedKeys={["Liveview"]}
          mode="horizontal"
          theme="dark"
          style={{ height: "3rem" }}
        >
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <button
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
            </button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button
              onClick={(e) => e.preventDefault()}
              className="drop_down_menu"
              style={{
                right: "0",
                position: "absolute",
                width: "115px",
                padding: "5px",
              }}
            >
              <Space>
                <UserAvatarIcon />
                {user}
                <DeropDownIcon />
              </Space>
            </button>
          </Dropdown>
        </Menu>
        <Outlet />
      </Col>
    </Row>
  );
};

export default LayoutTop;
