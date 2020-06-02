import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

class SchoolPage extends React.Component {
  render() {
    return (
      <div>
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
                  <i className="fas fa-school"> </i> Agregar Colegio
                </Button>
              </Col>
            </Row>
          </Container>
          <br />
        </div>

        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow" style={{ height: "800px" }}>
                <CardHeader className="border-0">
                  <h3> Listado de Colegios</h3>
                </CardHeader>
                <CardBody className="border-1">
                  {/*props.getSchools.map((s) => console.log(s))*/}
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps, {})(SchoolPage);
