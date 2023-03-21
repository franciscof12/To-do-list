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

const Barra = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{width:"45px"}}
              alt="logo de react"
              src="react1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React To-do-list
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Barra;
