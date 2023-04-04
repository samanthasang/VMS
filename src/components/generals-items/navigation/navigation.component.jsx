import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

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
          {steps.length - current > steps.length - 1 && (
            // navigate to login page
            <Link
              to={"/login"}
              className="btn_pre"
              style={{
                margin: "0 8px 0 0",
              }}
              type="primary"
            >
              Back To Login
            </Link>
          )}
          {/* handle the steps in the proccess */}
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
          {/* finish the proccess */}
          {current === steps.length - 1 && (
            <Button
              className="btn_next"
              type="primary"
              onClick={handleSubmitForm}
            >
              Finish
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Navigation;
