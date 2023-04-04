import { Col, Row, Menu, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import {
  PalybackIcon,
  LiveviewIcon,
  DevicesIcon,
  AboutIcon,
  LogOut,
} from "../../assets/Icons/JSXs";
// import { UsersIcon } from "../../assets/Icons/JSXs";
import { LoadMenu } from "../../redux/layout_redux/layoutAction";
import ModalAbout from "../generals-items/modal-about/modal-about.component";
import ModalLogout from "../generals-items/modal-logout/modal-logout.component";

import "./layout.styles.scss";

const Layout = () => {
  const dispatch = useDispatch();
  const menuItem = useSelector((state) => state.LayoutReducer.menuItem);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAboutOpen, setIsModalAboutOpen] = useState(false);

  useEffect(() => {
    menuItem !== window.location.pathname &&
      dispatch(LoadMenu(window.location.pathname));
  }, [menuItem, window.location.pathname]);
  const showModalAbout = () => {
    setIsModalAboutOpen(true);
  };

  const handleModalAboutOk = () => {
    setIsModalAboutOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const onClick = (e) => {
    dispatch(LoadMenu(e.key));
  };

  return (
    <>
      <Row className="side_nav_2">
        <Col style={{ height: "100%" }}>
          <Menu
            onClick={onClick}
            selectedKeys={menuItem}
            trigger={["click"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}
            style={{ height: "100%" }}
          >
            <Menu.Item key="/liveview" icon={<LiveviewIcon />}>
              <Link to={"/liveview"}>Live View</Link>
            </Menu.Item>
            <Menu.Item key="/playback" icon={<PalybackIcon />}>
              <Link to={"/playback"}>Playback</Link>
            </Menu.Item>
            {/* <Menu.Item key="/user" icon={<UsersIcon />}>
              <Link to={"/user"}>User</Link>
            </Menu.Item> */}
            <Menu.Item key="/devices" icon={<DevicesIcon />}>
              <Link to={"/devices"}>Devices</Link>
            </Menu.Item>
          </Menu>
          <Button
            onClick={showModalAbout}
            key="About"
            icon={<AboutIcon />}
            style={{
              bottom: "0",
              position: "absolute",
              width: "48px",
              height: "40px",
              marginBottom: "56px",
            }}
          />
          <Button
            onClick={showModal}
            key="Log Out"
            icon={<LogOut />}
            style={{
              bottom: "0",
              position: "absolute",
              width: "48px",
              height: "40px",
              marginBottom: "8px",
            }}
          />
          <ModalLogout
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleOk}
            isModalOpen={isModalOpen}
          />
          <ModalAbout
            showModalAbout={showModalAbout}
            handleModalAboutOk={handleModalAboutOk}
            handleModalAboutCancel={handleModalAboutOk}
            isModalAboutOpen={isModalAboutOpen}
          />
        </Col>
      </Row>
      <Outlet />
    </>
  );
};

export default Layout;
