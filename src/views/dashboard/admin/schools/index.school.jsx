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
import MaterialTable from "material-table";

import FormSchool from "./form.school";
import { db } from "functions/firebase";

class SchoolPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isEdit: false,
      columns: [
        { title: "Nombre", field: "nombre" },
        { title: "Email", field: "email" },
        { title: "Teléfono", field: "telefono", type: "numeric" },
        { title: "Dirección", field: "direccion" },
        { title: "Status", field: "status" },
        { title: "uid", field: "uid", hidden: true },
      ],
      rows: [],
      estado: [],
    };
  }

  componentDidMount() {
    /*this.setState({
      rows: 
    })*/
    let data = [];
    db.ref("/schools").on("value", (snapShot) => {
      this.setState((prevState) => {
        return { rows: [] };
      });
      data = [];
      if (snapShot.exists()) {
        snapShot.forEach((child) => {
          let a = child.val();
          let aux = {
            nombre: a.nombre,
            email: a.email,
            telefono: a.telefono,
            direccion: a.direccion,
            status: a.status,
            uid: child.key,
          };
          data.push(aux);
        });
        this.setState((prevState) => {
          return { rows: [...prevState.rows, ...data] };
        });
      }
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div>
        <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button color="success" onClick={this.toggle}>
                  {!this.state.modal ? null : (
                    <FormSchool
                      modal={this.state.modal}
                      toggle={this.toggle}
                      isEdit={this.state.isEdit}
                    />
                  )}
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
                  <MaterialTable
                    title="Tabla de nuevo"
                    columns={this.state.columns}
                    data={this.state.rows}
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            this.setState.estado((prevState) => {
                              const data = [...prevState.data];
                              data.push(newData);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            if (oldData) {
                              db.ref(`/schools/${oldData.uid}`).set(newData);
                              /*this.setState((prevState) => {
                                const data = [...prevState.rows];
                                data[data.indexOf(oldData)] = newData;
                                
                                return { ...prevState.rows, ...data };
                              });*/
                            }
                          }, 600);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            this.setState.estado((prevState) => {
                              const data = [...prevState.data];
                              data.splice(data.indexOf(oldData), 1);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                    }}
                  />
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
