import { Button, Modal } from "antd";
import React from "react";
import { LDelete } from "../../../assets/Icons/JSXs";

import "./modal-delete-device.styles.scss";

const ModalDeleteDevice = ({
  isModalOpen,
  handleOk,
  handleCancel,
  textModal,
}) => {
  return (
    <>
      <Modal
        className="modal_logout_window"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          // submit the delete API
          <Button type="primary" className="btn_next" onClick={handleOk}>
            Delete
          </Button>,
          // cansel the delete
          <Button className="btn_pre" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
        open={isModalOpen}
        title="Delete"
        centered
        style={{
          width: `520px`,
          borderRadius: "15px!important",
        }}
      >
        <LDelete />
        <p>{textModal}</p>
      </Modal>
    </>
  );
};

export default ModalDeleteDevice;
