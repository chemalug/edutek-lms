import React from "react";

import { connect } from "react-redux";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

class Header extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button color="success" onClick={() => {}}>
                  <i className="fa fa-user-plus"> </i> Agregar usuarios
                </Button>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </>
    );
  }
}

export default Header;
