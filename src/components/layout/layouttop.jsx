import { Col, Row, Menu, Space } from "antd";
import { UserAvatarIcon } from "../../assets/UserAvatar";
import LogoIcon from "../../assets/Logo.svg";
import ClockDemo from "../generals-items/clock/clock.component";

import "./layout.styles.scss";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const LayoutTop = () => {
  // get the first name to show in the top layout
  const user = useSelector((state) => state.login.user.user.firstName);

  // const handleOnClick = ({ key }) => {
  //   console.log(key);
  //   switch (key) {
  //     case "0":
  //       console.log("0");
  //       console.log(user);
  //       break;
  //     case "1":
  //       console.log("1");
  //       break;
  //     case "3":
  //       console.log("log: " + isLogedIn);
  //       // dispatch(UserLogOut());
  //       break;

  //     default:
  //       break;
  //   }
  // };
  // const menu = (
  //   <Menu
  //     onClick={handleOnClick}
  //     items={[
  //       {
  //         label: " Edit Profile",
  //         key: "0",
  //       },
  //       {
  //         label: "About",
  //         key: "1",
  //       },
  //       {
  //         label: "Logout",
  //         key: "3",
  //       },
  //     ]}
  //   />
  // );
  return (
    <Row className="side_nav ">
      {/* logo */}
      <Col
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          height: "3rem",
          background: "linear-gradient(180deg, #1d6ab0 100%, #103a64 100%)",
        }}
      >
        <img
          src={LogoIcon}
          alt=""
          style={{
            position: "absolute",
            width: "120px",
            height: "3rem",
            margin: "2px 20px",
          }}
        />
        {/* menu for user */}
        <Menu
          defaultSelectedKeys={["Liveview"]}
          className="side_nav_23"
          mode="horizontal"
          theme="dark"
          style={{
            height: "calc(3rem - 3px )",
            display: "flex",
            float: "right",
            direction: "rtl",
            width: "100%",
            paddingRight: "20px",
            gap: "16px",
          }}
        >
          {/* <Dropdown overlay={menu} trigger={["click"]}>
            <button
              onClick={(e) => e.preventDefault()}
              className="drop_down_menu"
            > */}
          {/* name & icon for user */}
          <Space>
            {/* <DeropDownIcon /> */}
            {/* first name */}
            {user}
            <UserAvatarIcon style={{ marginTop: "1.3em!important" }} />
          </Space>
          {/* </button> */}
          {/* </Dropdown> */}
          {/* <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <button
              onClick={(e) => e.preventDefault()}
              style={{
                padding: "8px",
                height: "45px",
              }}
            >
              <Space>
                <Badge dot>
                  <NitificationIcon />
                </Badge>
              </Space>
            </button>
          </Dropdown> */}

          {/* colck */}
          <ClockDemo />
        </Menu>

        <Outlet />
      </Col>
    </Row>
  );
};

export default LayoutTop;
