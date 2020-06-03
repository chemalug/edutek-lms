import React from "react";
import {
  Button,
  Modal,
  FormGroup,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  CustomInput,
} from "reactstrap";

import { db, firebase } from "functions/firebase";

const FormSchool = (props) => {
  const { toggle, modal, isEdit } = props;
  const [school, setSchool] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    status: "activo",
    fecha_alta: firebase.database.ServerValue.TIMESTAMP,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchool({ ...school, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    db.ref("/schools")
      .push()
      .set(school, (error) => {
        if (error) {
          alert("Data could not be saved " + error);
        } else {
          alert("Data saved succesfully");
        }
      });
    toggle();
    //props.loginFirebase(userData.email, userData.password);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <span>
            <h2>Datos del colegio</h2>
          </span>
        </ModalHeader>
        <Form onSubmit={onSubmit} role="form">
          <ModalBody>
            <FormGroup className="mb-3">
              <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-edit" />
                  </InputGroupText>
                </InputGroupAddon>
                <input
                  value={school.nombre}
                  onChange={handleInputChange}
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  type="text"
                  placeholder="Nombre de la institución"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-envelope" />
                  </InputGroupText>
                </InputGroupAddon>
                <input
                  value={school.email}
                  onChange={handleInputChange}
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Email de la institución"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-phone" />
                  </InputGroupText>
                </InputGroupAddon>
                <input
                  value={school.telefono}
                  onChange={handleInputChange}
                  id="telefono"
                  name="telefono"
                  className="form-control"
                  type="number"
                  placeholder="Teléfono de la institución"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-map-signs" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={school.direccion}
                  onChange={handleInputChange}
                  id="direccion"
                  name="direccion"
                  className="form-control"
                  type="textarea"
                  placeholder="Dirección de la institución"
                />
              </InputGroup>
            </FormGroup>
            {isEdit ? (
              <FormGroup className="mb-3">
                <InputGroup className="input-group">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-map-signs" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <CustomInput
                    type="select"
                    name="status"
                    id="status"
                    onChange={handleInputChange}
                  >
                    <option value="" selected disabled>
                      Status
                    </option>
                    <option value="activo">activo</option>
                    <option value="inactivo">inactivo</option>
                  </CustomInput>
                </InputGroup>
              </FormGroup>
            ) : null}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-info" type="submit">
              Ingresar
            </button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default FormSchool;
