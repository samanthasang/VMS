import { Button, Modal } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LDelete } from "../../../assets/Icons/JSXs";

import "./modal-delete-user.styles.scss";

const ModalDeleteUser = ({
  isModalOpen,
  handleOk,
  handleCancel,
  getId,
  selectedRowKeys,
}) => {
  const idForComponent = useSelector((state) => state.user.componentusers);
  const[isModal,setIsModal]= useState("");
  const [textModal, setTextModal] = useState(
    "Are you sure to delete the User?"
  );
  const [textModalAdminRole, setTextModalAdminRole] = useState(
    "Admin role can't be deleted."
  );
  const [textModalAdminUser, setTextModalAdminUser] = useState(
    "Admin user can't be deleted."
  );
  useEffect(() => {
    console.log("hiiiii   " + idForComponent);
    console.log("hiiiiiboobs   " + getId);
    {
      if(idForComponent == 1){
        console.log();
        setIsModal(textModalAdminRole)
      }else if(idForComponent==2){
        setIsModal(textModalAdminUser)
      }else{
        setIsModal(textModal)
      }
     
    }
  }, [idForComponent]);
  var footerForModal;
  if (idForComponent==1) {
    footerForModal = [
      <Button
        className="btn_next"
        key="submit"
        type="submit"
        onClick={handleCancel}
      >
        Ok
      </Button>,
    ];
  } else if(idForComponent==2) {
    footerForModal = [
      
      <Button
        className="btn_next"
        key="submit"
        type="submit"
        onClick={handleCancel}
      >
        Ok
      </Button>,
    ];
  }else{
    footerForModal =[
      <Button type="primary" className="btn_next" onClick={handleOk}>
        DELETE
      </Button>,
      <Button className="btn_pre" onClick={handleCancel}>
        Cancel
      </Button>,
    ]
  }
  return (
    <>
      <Modal
        className="modal_logout_window"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footerForModal}
        open={isModalOpen}
        title="Delete"
        centered
        style={{
          width: `520px`,
          borderRadius: "15px!important",
        }}
      >
        <LDelete />
        <p>{isModal}</p>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
