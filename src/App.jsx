import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
  Navbar,
} from "react-bootstrap";
import "./App.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const [item, setitem] = useState("");
  const [lista, setlista] = useState([]);

  const borraItem = (x) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(x, 1);
    setlista(nuevaLista);
  };

  const listaItem = lista.map((x, index) => (
    <ListGroupItem key={index}>
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
      {x}
    </ListGroupItem>
  ));

  const nuevoItem = () => {
    const nuevaLista = [...lista];
    nuevaLista.push(item);

    setlista(nuevaLista);
    setitem("");
  };

  return (
    <div className="main">
      <Container>
        <h1>React List</h1>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={item}
                onInput={(e) => setitem(e.target.value)}
                placeholder="introduce la tarea que deseas realizar"
              />
            </Form.Group>
            <Button variant="success" onClick={nuevoItem}>
              Añadir
            </Button>
            <Button
              style={{ margin: "5px" }}
              variant="danger"
              onClick={() => setlista([])}
            >
              Eliminar lista de tareas
            </Button>
          </Col>
          <Col>
            <ListGroup>
              <ListGroupItem>
                <th>---Tareas:</th>
              </ListGroupItem>
              {listaItem}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
