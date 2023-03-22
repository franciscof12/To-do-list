import { useState } from "react";
import Formulario from "./componentes/Formulario";
import { Container, Row, Col } from "react-bootstrap";
import Barra from "./componentes/Barra";
import "./App.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="principal">
      <Barra />
      <Container className="hero">
        <h1 className="titulo">Bienvenido a ReactList</h1>
        <Row>
          <Formulario />
        </Row>
      </Container>
    </div>
  );
}

export default App;
