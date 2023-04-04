import { Button, Col, Form, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./modal-ckeck-password.styles.scss";
import {
  RenewAcceessToken,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";
import InputFormWithLabelPassword from "../../form-items/inputformwithlabel copy/inputformwithlabel.component";

const ModalCheckPassword = ({ isCheckModalVisible, handleOkManual }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [inputs, setInputs] = useState({
    password: "",
  });

  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const handleSubmitaddgroups = (e) => {
    console.log("name:", inputs.name);
    var value = {
      name: inputs.name,
    };
    var accessToken = user.accessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/groups";
    // axios
    //   .post(url, value, config)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     const dt = extractData(res.data.data);
    //     console.log("OB" + dt);
    //     dispatch(SetOrganization(dt));
    //     e && handleOkManual();
    //     setInputs({ name: "", groupID: 0 });
    //   })
    //   .catch((e) => {
    //     e.response.status === 401 && dispatch(UserLogOut());
    //     e.response.status === 422 &&
    //       OpenNotification(
    //         "topRight",
    //         "",
    //         e.response.data.data.errors.name,
    //         "error"
    //       );
    //     console.log(e);
    //   });
  };
  const ReNewAccessToken = async (e) => {
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
        res.status === 200 && handleSubmitaddgroups(e);
      })
      .catch((e) => {
        console.log(e.response.status);
        console.log(e);
      });
  };
  const handleSubmit = (e) => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);

    user.expAccessToken < dateNow
      ? ReNewAccessToken(e)
      : handleSubmitaddgroups(e);
  };
  const handleOk = () => {
    if (inputs.password === "") {
      setPasswordEmpty(true);
      return;
    }
    // handleSubmit(true);
    setInputs({ password: "" });
    handleOkManual(false);
  };
  const handleCancelManual = () => {
    setInputs({ password: "" });
    handleOkManual(true);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, password: value }));
    if (inputs.name !== "") {
      setPasswordEmpty(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        className="modal_footer_live_window"
        style={{
          width: "460px",
          backgroundColor: "transparent",
          borderRadius: "15px!important",
          color: "#F0F2F5",
        }}
        bodyStyle={{
          backgroundColor: "#2E333D",
        }}
        title={"Enter Your Password"}
        centered={true}
        closable={true}
        visible={isCheckModalVisible}
        onOk={handleOkManual}
        onCancel={handleCancelManual}
        footer={[
          <Button className="btn_pre" onClick={handleCancelManual}>
            Cancel
          </Button>,
          <Button type="submit" className="btn_next" onClick={handleOk}>
            Save
          </Button>,
        ]}
        open={isCheckModalVisible}
      >
        <Row>
          <Col span={24}>
            <Form
              name="normal_login"
              className="manual-add-inputs"
              initialValues={{ remember: true }}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              onSubmit={handleSubmit}
            >
              <InputFormWithLabelPassword
                id="password"
                inputs={"password"}
                placeholder="Password"
                label="Password"
                type="text"
                handleChange={handleChange}
                value={inputs.password}
                empty={passwordEmpty}
              />
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalCheckPassword;
