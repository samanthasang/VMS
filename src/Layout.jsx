import { Col, Row, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import LoginPage from "./pages/loginpage/loginpage.component";

import { LiveviewIcon } from "../src/assets/liveview";
import { PalybackIcon } from "../src/assets/playback.jsx";
import { UsersIcon } from "../src/assets/users.jsx";
import { DevicesIcon } from "../src/assets/devices.jsx";
import { AboutIcon } from "../src/assets/about.jsx";
import { SettingIcon } from "../src/assets/setting.jsx";

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <Row>
      <Col span={20}>
        <Menu
          defaultSelectedKeys={["Liveview"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={true}
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
          <Menu.Item key="About" icon={<AboutIcon />}>
            <Link to={"/playBackpage"}>About</Link>
          </Menu.Item>
          <Menu.Item key="Setting" icon={<SettingIcon />}>
            <Link to={"/playBackpage"}>Setting</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Layout;
