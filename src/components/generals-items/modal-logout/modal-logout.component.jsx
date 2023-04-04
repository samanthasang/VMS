import { Button, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { IconLogOut } from "../../../assets/Icons/JSXs/index";
import { UserLogOut } from "../../../redux/login_redux/loginAction";

import "./modal-logout.styles.scss";

const ModalLogout = ({ isModalOpen, handleOk, handleCancel }) => {
  const dispatch = useDispatch();

  //
  const handleLogout = () => {
    handleCancel(false);
    dispatch(UserLogOut());
  };

  return (
    <Modal
      className="modal_logout_window"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
      footer={[
        // log out BTN
        <Button type="primary" className="btn_next" onClick={handleLogout}>
          Log out
        </Button>,
        // close the log out modal
        <Button className="btn_pre" onClick={handleOk}>
          Cancel
        </Button>,
      ]}
      open={isModalOpen}
      title="Log out"
      centered
      style={{
        width: `520px`,
        borderRadius: "15px!important",
      }}
    >
      <IconLogOut />
      <p>Are you sure to logout?</p>
    </Modal>
  );
};

export default ModalLogout;
