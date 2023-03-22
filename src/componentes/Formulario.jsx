import React from "react";
import App from "../App";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Formulario = () => {
  const [item, setitem] = useState("");
  const [lista, setlista] = useState([]);
  const [categoria, setcategoria] = useState("Urgente");
  const [boton, setboton] = useState("none");

  const getColor = (categoria) => {
    if (categoria == "Normal") {
      return "rgb(184, 229, 228)";
    } else if (categoria === "Urgente") {
      return "rgb(229, 184, 184)";
    } else if (categoria == "Importante") {
      return "rgb(226, 229, 184)";
    }
  };

  const borraItem = (x) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(x, 1);
    setlista(nuevaLista);
  };

  const listaItem = lista.map((x, index) => (
    <ListGroupItem
      style={{ backgroundColor: getColor(x.categoria) }}
      key={index}
    >
      <Button
        variant="link"
        onClick={() => borraItem(index)}
        className="borrar"
      >
        <FontAwesomeIcon
          bounce
          style={{ color: "red", cursor: "pointer" }}
          icon={faTrash}
        />
      </Button>
      {x.item}
    </ListGroupItem>
  ));
  const [error, seterror] = useState("");
  const nuevoItem = () => {
    const nuevaLista = [...lista];
    nuevaLista.push({ item, categoria });
    if (item.trim() == "") {
      seterror("tarea sin definir");
    } else {
      setlista(nuevaLista);
      setitem("");
      seterror("");
      setboton("block");
    }
  };

  const borraLista = () => {
    setlista([]);
    setboton("none");
  };
  return (
    <>
      <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            value={item}
            onChange={(e) => setitem(e.target.value)}
            placeholder="introduce la tarea que deseas realizar"
          />
          <Form.Text className="text-muted">{error}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 formulario">
          <Button
            style={{ borderRadius: "15px", width: "20%" }}
            variant="success"
            onClick={nuevoItem}
          >
            Añadir
          </Button>
          <Form.Select
            onInput={(e) => setcategoria(e.target.value)}
            style={{ width: "40%", backgroundColor: getColor(categoria) }}
            id="disabledSelect"
          >
            <option>Urgente</option>
            <option>Importante</option>
            <option>Normal</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <ListGroup>
          <ListGroupItem>
            <h4>Tareas</h4>
          </ListGroupItem>
          {listaItem}
        </ListGroup>
        <Button
          style={{ margin: "5px", borderRadius: "15px", display: boton }}
          variant="danger"
          onClick={borraLista}
        >
          Eliminar lista de tareas
        </Button>
      </Col>
    </>
  );
};

export default Formulario;
