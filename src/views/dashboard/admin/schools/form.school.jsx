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

const FormSchool = (props) => {
  const { toggle, modal, auth } = props;
  const [school, setSchool] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    status: "",
    fecha_alta: "",
  });
};
