import { Col, Row, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoginPage from "../../pages/loginpage/loginpage.component";

import { LiveviewIcon } from "../../assets/liveview";
import { PalybackIcon } from "../../assets/playback.jsx";
import { UsersIcon } from "../../assets/users.jsx";
import { DevicesIcon } from "../../assets/devices.jsx";
import { AboutIcon } from "../../assets/about.jsx";
import { SettingIcon } from "../../assets/setting.jsx";

import "./layout.styles.scss";

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      <Row className="side_nav_2">
        <Col style={{ height: "100%" }}>
          <Menu
            defaultSelectedKeys={["Liveview"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}
            style={{ height: "100%" }}
          >
            <Menu.Item key="Liveview" icon={<LiveviewIcon />}>
              <Link to={"/liveViewpage"}>Liveview</Link>
            </Menu.Item>
            <Menu.Item key="Playback" icon={<PalybackIcon />}>
              <Link to={"/playBackpage"}>Playback</Link>
            </Menu.Item>
            <Menu.Item key="users" icon={<UsersIcon />}>
              <Link to={"/userpage"}>users</Link>
            </Menu.Item>
            <Menu.Item key="devices" icon={<DevicesIcon />}>
              <Link to={"/devicespage"}>devices</Link>
            </Menu.Item>
            <Menu.Item
              key="About"
              icon={<AboutIcon />}
              style={{
                bottom: "50px",
                position: "absolute",
                width: "60px",
              }}
            >
              <Link to={"/playBackpage"}>About</Link>
            </Menu.Item>
            <Menu.Item
              key="Setting"
              icon={<SettingIcon />}
              style={{
                bottom: "0",
                position: "absolute",
                width: "60px",
              }}
            >
              <Link to={"/playBackpage"}>Setting</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Layout;
