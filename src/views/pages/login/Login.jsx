import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginFirebase } from "redux/actions/auth.action";
import {
  Button,
  Modal,
  FormGroup,
  Form,
  Row,
  Col,
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const LoginModal = (props) => {
  const { toggle, modal, auth } = props;
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  //const [modal, setModal] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    props.loginFirebase(userData.email, userData.password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="bg-dark">
        <Row className="justify-content-center">
          <Col>
            <Card className="bg-dark shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <Form onSubmit={onSubmit} role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <input
                        value={userData.email}
                        onChange={handleInputChange}
                        id="email"
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        onChange={handleInputChange}
                        value={userData.password}
                        id="password"
                        name="password"
                        className="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <button
                      className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                      type="submit"
                    >
                      Ingresar
                    </button>
                    <Button
                      className="btn btn-lg btn-block text-uppercase waves-effect waves-light"
                      color="secondary"
                      onClick={toggle}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
                <Row>
                  <Col>
                    <Link className="text-light" to="/auth/forgotpassword">
                      <small className="font-weight-bold">
                        Forgot password?
                      </small>
                    </Link>
                  </Col>
                  <Col className="text-right">
                    <Link className="text-white" to="/auth/register">
                      <small className="font-weight-bold">
                        Create new account
                      </small>
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginFirebase })(LoginModal);
