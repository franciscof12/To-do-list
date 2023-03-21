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
  const [categoria, setcategoria] = useState("Urgente");

  

  const getColor = (categoria) =>{
    if (categoria == "Normal"){
      return "rgb(184, 229, 228)"
    }else if (categoria === "Urgente"){
      return "rgb(229, 184, 184)"
    }else if(categoria == "Importante"){
      return "rgb(226, 229, 184)"
    }
  }

  const borraItem = (x) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(x, 1);
    setlista(nuevaLista);
  };


  const listaItem = lista.map((x, index) => (
    <ListGroupItem style={{backgroundColor:getColor(x.categoria)}} key={index}>
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

  const nuevoItem = () => {
    const nuevaLista = [...lista];
    nuevaLista.push({item, categoria});
    setlista(nuevaLista);
    setitem("");
  };

  return (
    <div className="principal">
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
            <Form.Group
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className="mb-3"
            >
              <Button
                style={{ borderRadius: "15px", width: "20%" }}
                variant="success"
                onClick={nuevoItem}
              >
                Añadir
              </Button>            
              <Form.Select value={categoria} onInput={(e) => setcategoria(e.target.value)} style={{ width: "40%" }} id="disabledSelect">
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
              style={{ margin: "5px", borderRadius: "15px" }}
              variant="danger"
              onClick={() => setlista([])}
            >
              Eliminar lista de tareas
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
