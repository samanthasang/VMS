import { Button, Modal } from "antd";
import React from "react";
import { LError } from "../../../assets/Icons/JSXs";

import "./modal-delete-empty.styles.scss";

const ModalDeleteEmpty = ({ isModalOpen, handleOk }) => {
  return (
      <Modal
        className="modal_delete_empty_window"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        closable={true}
      footer={[
          // close the modal
          <Button type="primary" className="btn_next" onClick={handleOk}>
            Ok
          </Button>,
        ]}
        title="Delete"
        centered
        style={{
          width: `520px`,
          height: `216px`,
          borderRadius: "15px!important",
        }}
      >
        <LError />
        <p>Please select a device first</p>
      </Modal>
  );
};

export default ModalDeleteEmpty;
