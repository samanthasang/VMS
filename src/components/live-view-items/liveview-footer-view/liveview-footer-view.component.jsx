import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { ExportFile } from "../../../assets/Icons/JSXs/index";
import { Col, Select } from "antd";

// import ModalFooterLiveView from "../../generals-items/modal-footer-live/modal-footer-live.component";
import "./liveview-footer-view.styles.scss";
import { GroupTable } from "../../../redux/device_redux/deviceAction";
import {
  AddVideoASpect,
  ChangeAspectRatio,
} from "../../../redux/liveView_redux/liveViewAction";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";

const LiveViewFooterView = () => {
  const dispatch = useDispatch();
  // get the user information
  const user = useSelector((state) => state.login.user);

  // sace aspect ratio for videos
  const aspectRatio = useSelector((state) => state.liveView.aspectRatio);
  // renew access token API
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
        dispatch(UserLogOut());
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

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  // get the aspect ratio for videos
  const handleChange = (key, value) => {
    console.log(`selected ${value}`);
    console.log(`selected ${key}`);
    dispatch(ChangeAspectRatio(key));
    dispatch(AddVideoASpect(key));
  };
  return (
    // save view button
    <Col span={12} className="footer_icon_live_panel">
      {/* <Button
        shape="circle"
        icon={<ExportFile />}
        size="large"
        onClick={showModal}
        className="footer_drop_live_view_save_view"
      />
      {isModalOpen && (
        <ModalFooterLiveView
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
        />
      )} */}

      {/* select aspect ratio for videos */}
      <Select
        onChange={handleChange}
        trigger={["click"]}
        className="footer_select_live_view"
        defaultValue="Original"
        value={aspectRatio}
        options={[
          {
            key: "aspect_D",
            value: "aspect_D",
            label: "Original",
          },
          {
            key: "aspect_1_1",
            value: "aspect_1_1",
            label: "1:1",
          },
          {
            key: "aspect_4_3",
            value: "aspect_4_3",
            label: "4:3",
          },
          {
            key: "aspect_3_4",
            value: "aspect_3_4",
            label: "3:4",
          },
          {
            key: "aspect_5_4",
            value: "aspect_5_4",
            label: "5:4",
          },
          {
            key: "aspect_4_5",
            value: "aspect_4_5",
            label: "4:5",
          },
          {
            key: "aspect_16_9",
            value: "aspect_16_9",
            label: "16:9",
          },
          {
            key: "aspect_9_16",
            value: "aspect_9_16",
            label: "9:16",
          },
        ]}
      ></Select>
    </Col>
  );
};

export default LiveViewFooterView;
