import { Button, Modal } from "antd";
import React from "react";
import { Purchase } from "../../../assets/Icons/JSXs";

import "./modal-delete-demo.styles.scss";

const ModalDeleteDemo = ({ isModalOpen, handleOk }) => {
  return (
    <>
      <Modal
        className="modal_demo_empty_window"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        closable={true}
        footer={[
          <Button type="primary" className="btn_next" onClick={handleOk}>
            OK
          </Button>,
        ]}
        title="Demo Version"
        centered
        style={{
          width: `520px`,
          height: `216px`,
          borderRadius: "15px!important",
        }}
      >
        <Purchase />
        <p>
          This feature is only accessible to premium version users. You are
          currently using a trial version. Please upgrade your license!
        </p>
      </Modal>
    </>
  );
};

export default ModalDeleteDemo;
