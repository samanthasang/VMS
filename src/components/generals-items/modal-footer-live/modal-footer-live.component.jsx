import { Button, Col, Form, Modal, Row, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputFormWithLabel from "../../form-items/inputformwithlabel/inputformwithlabel.component";

import "./modal-footer-live.styles.scss";
import {
  RenewAcceessToken,
  UserLogOut,
} from "../../../redux/login_redux/loginAction";
import moment from "moment";

const { Option } = Select;

const ModalFooterLiveView = ({ isModalOpen, handleOk, handleCancel }) => {
  const dispatch = useDispatch();
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const views_for_select = useSelector((state) => state.liveView.View);
  const groups = useSelector((state) => state.device.groups);
  const user = useSelector((state) => state.login.user);
  const [inputs, setInputs] = useState({
    name: "",
    groupID: "",
  });

  // const [emptyUserName, setEmtyUserName] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));

    // if (inputs.name !== "") {
    //   setEmtyUserName(false);
    // }
  };

  const onFinishFailed = (errorInfo) => console.log("Failed:", errorInfo);
  const handleSubmitgroupsLive = () => {
    // dispatch(AddVIews(inputs));
    console.log(inputs);
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/";

    var accessToken = user.accessToken;
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzAyOTIzODEsImxvZ2luS2V5IjoiY3B4VjJSZFBwZUJaRHZHYUR4SXhsaFl6RmRoZHN0VXU3TWRyUk01dXFIZEVPIiwidXNlcklkIjo0fQ.6nboDN3FnStrWhQHIl2eXN3m2Bg3GD3mMjaNmDbnG0k";
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    axios
      .post(url, inputs, config)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
    // axios.get(url, config).then((res) => {
    //   console.log(res.data.data);
    //   const dt = extractData(res.data.data);
    //   console.log("OB" + dt);
    //   dispatch(SetOrganization(dt));
    // })
    //   .catch((e) => console.log(e));
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
        res.status === 200 && handleSubmitgroupsLive();
      })
      .catch((e) => {
        // e.response.status === 401 && dispatch(UserLogOut());
        console.log(e.response.status);
        console.log(e);
      });
  };

  const handleSubmit = () => {
    const dateNow = moment(new Date()).unix();
    console.log(dateNow);
    console.log(user.expAccessToken);
    user.expAccessToken < dateNow
      ? ReNewAccessToken()
      : handleSubmitgroupsLive();
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
        title="Add New View"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button className="btn_pre" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button type="submit" className="btn_next" onClick={handleSubmit}>
            Save
          </Button>,
        ]}
        open={isModalOpen}
        centered
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
              <InputFormWithLabel
                span={10}
                offset={7}
                id="name"
                inputs={"name"}
                placeholder={"View name"}
                label="Device Name"
                type="text"
                handleChange={handleChange}
                value={inputs.name}
                required={true}
              />
              <Form.Item
                label="Group Name"
                className="select_form"
                required={true}
              >
                <Select
                  placeholder={"Default group"}
                  optionFilterProp="children"
                  onChange={(value, id) =>
                    // console.log(id),
                    setInputs((inputs) => ({
                      ...inputs,
                      groupID: value,
                    }))
                  }
                  name="groupID"
                  id="groupID"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {groups.map((v) => (
                    <Option key={v.id} value={v.id} name="groupID">
                      {v.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalFooterLiveView;
