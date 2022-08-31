import { Col, Row, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import OpenNotification from "../../form-items/notification/notification.component";

import "./navigation.styles.scss";

const Navigation = ({
  steps,
  current,
  form,
  handleSubmit,
  next,
  prev,
  handleSubmitForm,
}) => {
  return (
    <Row>
      <Col className="navigation_registeration" span={24}>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Link
              to={"/"}
              className="btn_next"
              style={{
                margin: "0 8px",
                background: "#E1EEFA",
                border: "2px solid #2175C2",
              }}
              type="primary"
            >
              Bakc To Login
            </Link>
          )}
          {current > 0 && (
            <Button
              className="btn_pre"
              style={{
                margin: "0 8px 0 0",
              }}
              onClick={prev}
            >
              Back
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className="btn_next" type="primary" onClick={handleSubmit}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="btn_next"
              type="primary"
              onClick={handleSubmitForm}
            >
              Done
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Navigation;
