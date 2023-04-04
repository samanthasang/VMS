import { Button, DatePicker, Col, Form, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./modal-cut-playback.styles.scss";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import axios from "axios";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import { useDispatch } from "react-redux";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);

const ModalCutPlayBack = ({
  isModalCutOpen,
  handleModalCutOk,
  handleModalCutCancel,
  handleModalCutExport,
}) => {
  const dispatch = useDispatch();
  const [deviceTypeEmpty, setDeviceTypeEmpty] = useState(false);
  const user = useSelector((state) => state.login.user);
  const [urlDownload, setUrlDownload] = useState("");
  // const cutTime = useSelector((state) => state.playback.cutTime);
  const startTime = useSelector((state) => state.playback.startTime);
  const endTime = useSelector((state) => state.playback.endTime);
  const disabledDates = useSelector((state) => state.playback.disabledDates);
  const idForGetDate = useSelector((state) => state.playback.cameraID);
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const [inputs, setInputs] = useState({
    videoFormat: "MP4",
  });

  useEffect(() => {
    console.log("disabledDates : " + disabledDates);
    console.log(
      "cutTime.startTime : " + moment(startTime).format("YYYY-MM-DD HH:mm:ss")
    );
    console.log(
      "cutTime.startTime : " + moment(endTime).format("YYYY-MM-DD HH:mm:ss")
    );
  }, [startTime, endTime]);
  const handleSubmitcut = (event) => {
    console.log("idForGetDate : " + idForGetDate);
    console.log("dates start:", dates.startDate);
    console.log(
      "dates start:",
      moment(startTime).format("YYYY-MM-DD HH:mm:ss")
    );
    console.log("dates end:", dates.endDate);
    console.log("dates end:", moment(endTime).format("YYYY-MM-DD HH:mm:ss"));
    var url = process.env.REACT_APP_HTTP + "/api/playback/" + idForGetDate;

    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var data = {
      startTime: moment(startTime).unix(),
      endTime: moment(endTime).unix(),
    };
    idForGetDate &&
      axios
        .post(url, data, config)
        .then((res) => {
          console.log(res.data.data.videoURL);
          console.log(res.data.data.duration);
          setUrlDownload(res.data.data.videoURL);
          // setLoadings(false);
          // setDisabledDates(res.data.data);
        })
        .catch((e) => {
          e.response.status === 401 && dispatch(UserLogOut());
          console.log(e);
        });
  };
  const ReNewAccessToken = async () => {
    console.log("get ReNewAccessToken");
    console.log("get ReNewAccessToken    " + user.accessToken);
    console.log(user.expAccessToken);
    var url = process.env.REACT_APP_HTTP + "/api/auth/renew-access-token";

    var refreshToken = { refreshToken: user.refreshToken };
    await axios
      .post(url, refreshToken)
      .then((res) => {
        dispatch(RenewAcceessToken(res.data.data));
        console.log(res.status);
        console.log(res.data);
        res.status === 200 && handleSubmitcut();
      })
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };
  const handleSubmit = (event) => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);
    {
      user.expAccessToken < dateNow ? ReNewAccessToken() : handleSubmitcut();
    }
  };
  const onChangeStart = (value, dateString, id) => {
    console.log("Selected Time id: ", id);
    console.log("Selected Time: ", moment(value).valueOf());
    console.log("Formatted Selected Time: ", dateString);
    setDates({ ...dates, startDate: moment(value).valueOf() });
  };
  const onChangeEnd = (value, dateString, id) => {
    console.log("Selected Time id: ", id);
    console.log("Selected Time: ", moment(value).valueOf());
    console.log("Formatted Selected Time: ", dateString);
    setDates({ ...dates, endDate: moment(value).valueOf() });
  };

  // const onOk = (value) => {
  //   console.log("onOk: ", value);
  // };
  // const handleOk = () => {};
  // const disabledDateF = (current) => {
  //   console.log(disabledDates);
  //   // return !!!disabledDates.find(
  //   //   (date) => date === moment(current).format("YYYY-MM-DD")
  //   // );
  // };
  var footerForModal;
  if (urlDownload) {
    footerForModal = [
      <a
        href={urlDownload}
        download
        target="_blank"
        rel="noreferrer"
        type="primary"
        className="btn_next"
        key="submit"
        // onClick={handleSubmit}
      >
        Download
      </a>,
      <Button className="btn_pre" key="back" onClick={handleModalCutCancel}>
        Cancel
      </Button>,
    ];
  } else {
    footerForModal = [
      <Button
        type="primary"
        className="btn_next"
        key="submit"
        onClick={handleSubmit}
      >
        Export
      </Button>,
      <Button className="btn_pre" key="back" onClick={handleModalCutCancel}>
        Cancel
      </Button>,
    ];
  }
  return (
    <Modal
      className="modal_export_window"
      visible={isModalCutOpen}
      onOk={handleSubmit}
      onCancel={handleModalCutCancel}
      footer={footerForModal}
      title={"Export"}
      open={isModalCutOpen}
      centered
      style={{
        width: `520px`,
        borderRadius: "15px!important",
        color: "#f0f2f5",
      }}
    >
      <Row>
        <Col span={24}>
          <Form
            onSubmit={handleSubmit}
            className="manual-add-inputs"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <Form.Item
              className={`${
                deviceTypeEmpty ? "border_red_label" : "select_normal"
              }`}
              id="deviceType321"
              placeholder="Device Type"
              label="Start time:"
              required={true}
              // empty={deviceTypeEmpty}
              rules={[
                {
                  required: true,
                  message: "Please select Device Type!",
                },
              ]}
            >
              <DatePicker
                showTime
                defaultValue={dayjs(
                  moment(startTime).format("YYYY-MM-DD HH:mm:ss"),
                  "YYYY-MM-DD HH:mm:ss"
                )}
                format={"YYYY/MM/DD HH:mm:ss"}
                // disabledDate={disabledDateF}
                onChange={onChangeStart}
                onOk={onChangeStart}
                disabled
                id="startDate"
                style={{
                  width: "100%",
                  margin: "0px 0 4px 0",
                }}
              />
            </Form.Item>
            <Form.Item
              className={`${
                deviceTypeEmpty ? "border_red_label" : "select_normal"
              }`}
              id="deviceType"
              placeholder="Device Type"
              label="End time:"
              required={true}
              // empty={deviceTypeEmpty}
              rules={[
                {
                  required: true,
                  message: "Please select Device Type!",
                },
              ]}
            >
              <DatePicker
                showTime
                value={
                  endTime
                    ? dayjs(
                        moment(endTime).format("YYYY-MM-DD HH:mm:ss"),
                        "YYYY-MM-DD HH:mm:ss"
                      )
                    : ""
                }
                format={"YYYY/MM/DD HH:mm:ss"}
                onChange={onChangeEnd}
                onOk={onChangeEnd}
                disabled
                id="endtDate"
                style={{
                  width: "100%",
                  margin: "0px 0 4px 0",
                }}
              />
            </Form.Item>
            <Form.Item
              className={`${
                deviceTypeEmpty ? "border_red_label" : "select_normal"
              }`}
              id="videoFormat"
              inputs={"videoFormat"}
              placeholder="Video Format"
              label="Video format:"
              type="text"
              value={"MP4"}
              required={true}
              // empty={deviceTypeEmpty}
              rules={[
                {
                  required: true,
                  message: "Please select Device Type!",
                },
              ]}
            >
              <Select
                placeholder="select your Video Format"
                optionFilterProp="children"
                name={"Video format:"}
                id="videoFormat"
                defaultValue={"MP4"}
                // value={inputs.deviceType}
                onChange={(value, id) =>
                  setInputs((inputs) => ({
                    ...inputs,
                    videoFormat: id.value,
                  }))
                }
                options={[
                  {
                    label: "MP4",
                    value: "MP4",
                    key: "MP4",
                  },
                ]}
              ></Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalCutPlayBack;
