import { Col, Row, Modal, Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import VideoCard from "../video-cart/videocart";

import "./modal.styles.scss";

const ModalVideo = ({ id, src, visible, handleCancel, handleOk, loading }) => {
  // const [loading, setLoading] = useState(false);
  // const [visible, setVisible] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      //Do whatever when esc is pressed
      console.log("ESC");
      // handleCancel();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <Row>
      <Col className="" span={24}>
        <Modal
          className="modal_video_window"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          style={{
            width: `Dimension.get("window").width`,
            height: `Dimensions.get("window").height`,
          }}
        >
          {/* <VideoCard StreamLink={src} /> */}
          <video id={id} autoPlay muted playsInline loop>
            <source src={src} type="video/mp4" />
          </video>
        </Modal>
      </Col>
    </Row>
  );
};

export default ModalVideo;
