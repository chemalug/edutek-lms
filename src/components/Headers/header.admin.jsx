import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

//import ModalForm from "../../views/admin/Schools/modal.school";
const Header = (props) => {
  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container>
          <Row>
            <Col lg="6" xl="3">
              <Button
                color="success"
                onClick={() => {
                  //ModalForm("Hola mindo", "true");
                }}
              >
                <i className={props.icon}> </i> {props.labelButton}
              </Button>
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </>
  );
};

export default Header;
