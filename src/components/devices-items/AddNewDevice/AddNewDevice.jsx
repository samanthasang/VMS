import React, { useState } from "react";
import { Button } from "antd";
import { Add } from "../../../assets/Icons/JSXs";

import "./AddNewDevice.scss";
import ModalAddDevice from "../../generals-items/modal-add-device/modal-add-device.component";
// import ModalDeleteDemo from "../../generals-items/modal-delete-demo/modal-delete-demo.component";

const AddNewDevice = () => {
  // visibilty of add device modal
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  // hide modal
  const handleOkManual = () => {
    setIsAddModalVisible(false);
  };

  // show modal
  const handleOkAndContinueManual = () => {
    setIsAddModalVisible(true);
  };

  return (
    <>
      {/* add device BTN */}
      <Button
        className="header_btn btn_next"
        type="primary"
        onClick={() => setIsAddModalVisible(true)}
        style={{ marginLeft: "8px" }}
      >
        {/* add icon */}
        <Add
          style={{ width: "18px", height: "18px", marginRight: "0.25rem" }}
        />
        Add
      </Button>
      {/* add device Modal */}
      <ModalAddDevice
        handleOkManual={handleOkManual}
        handleOkAndContinueManual={handleOkAndContinueManual}
        handleCancelManual={handleOkManual}
        isAddModalVisible={isAddModalVisible}
        titleModal={"Add New Device"}
      />
      {/* <ModalDeleteDemo
        isModalOpen={isAddModalVisible}
        handleOk={handleOkManual}
      /> */}
    </>
  );
};
export default AddNewDevice;
