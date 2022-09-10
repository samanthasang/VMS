import { Col, Row, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

import { LiveviewIcon } from "../../assets/Icons/JSXs";
import { PalybackIcon } from "../../assets/Icons/JSXs";
import { UsersIcon } from "../../assets/Icons/JSXs";
import { DevicesIcon } from "../../assets/Icons/JSXs";
import { AboutIcon } from "../../assets/Icons/JSXs";
import { SettingIcon } from "../../assets/Icons/JSXs";

import "./layout.styles.scss";

const Layout = ({ hideHeaderPaths = [] }) => {
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
                width: "3rem",
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
                width: "3rem",
              }}
            >
              {/* <a href="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"/> */}
              <a
                draggable
                onClick={(event) => event.preventDefault()}
                // style={{
                //   pointerEvents: "none",
                // }}
                href={
                  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                }
              >
                Setting
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Layout;
