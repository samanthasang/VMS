import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ExportFile,
  // ExportProgress,
  TimeClip,
} from "../../../assets/Icons/JSXs/index";
import { Button, Col } from "antd";

// import ModalFooterLiveView from "../../generals-items/modal-footer-live/modal-footer-live.component";
import "./playback-footer-view.styles.scss";
import { GroupTable } from "../../../redux/device_redux/deviceAction";
// import { ChangeAspectRatio } from "../../../redux/liveView_redux/liveViewAction";
import ModalExportPlayBack from "../../generals-items/modal-export-playback/modal-export-playback.component";
import { useSelector } from "react-redux";
import ModalCutPlayBack from "../../generals-items/modal-cut-playback/modal-cut-playback.component";
import { AddCutPlayBack } from "../../../redux/playback_redux/playbackAction";
import axios from "axios";
import moment from "moment";
import { RenewAcceessToken } from "../../../redux/login_redux/loginAction";

const PlayBackFooterView = ({ handlePause, loadVideo }) => {
  const dispatch = useDispatch();
  // get the user information
  const user = useSelector((state) => state.login.user);
  // visibility for export modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // visibility for cut video modal
  const [isModalCutOpen, setIsModalCutOpen] = useState(false);
  // visibility for cut in timeline
  const cutIsOn = useSelector((state) => state.playback.cutIsOn);

  // renew the access token
  const ReNewAccessToken = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    // renew access token API
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
      })
      .then(dispatch(GroupTable(user.accessToken)))
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };
  // check access token
  useEffect(() => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessToken()
      : dispatch(GroupTable(user.accessToken));
  }, [user.expAccessToken]);

  // show modal export
  const showModalExport = () => {
    setIsModalOpen(true);
    handlePause();
  };
  // hide modal export
  const handleModalAboutOk = () => {
    setIsModalOpen(false);
  };

  // show modal cut video
  const handleModalCutOk = () => {
    setIsModalCutOpen(true);
    handlePause();
  };

  // show modal export & hide modal cut
  const handleModalCutExport = () => {
    dispatch(AddCutPlayBack());
    setIsModalCutOpen(false);
    setIsModalOpen(true);
  };

  // hide modal cut
  const handleModalCutCancel = () => {
    dispatch(AddCutPlayBack());
    setIsModalCutOpen(false);
  };

  // anable cut proccess for video
  const handleCutIsOn = () => {
    dispatch(AddCutPlayBack(true));
  };

  return (
    <Col
      span={8}
      className="footer_icon_live_view"
      style={{ direction: "ltr" }}
    >
      {/* <Button
        shape="circle"
        disabled={cutIsOn}
        icon={<ExportProgress />}
        onClick={showModalExport}
        className="footer_drop_live_view_save_view"
      /> */}

      {/* enable cut BTN */}
      <Button
        shape="circle"
        disabled={cutIsOn || loadVideo}
        icon={<TimeClip />}
        onClick={handleCutIsOn}
        className="footer_drop_live_view_save_view"
      />
      {/* send cut time from timeline to cut modal */}
      {cutIsOn && (
        <Button
          shape="circle"
          icon={<ExportFile />}
          onClick={handleModalCutOk}
          className="footer_drop_live_view_save_view"
        />
      )}
      {/* modal export */}
      <ModalExportPlayBack
        handleModalAboutOk={handleModalAboutOk}
        handleModalAboutCancel={handleModalAboutOk}
        isModalAboutOpen={isModalOpen}
      />
      {/* modal cut  */}
      <ModalCutPlayBack
        isModalCutOpen={isModalCutOpen}
        handleModalCutOk={handleModalCutOk}
        handleModalCutExport={handleModalCutExport}
        handleModalCutCancel={handleModalCutCancel}
      />
    </Col>
  );
};

export default PlayBackFooterView;
