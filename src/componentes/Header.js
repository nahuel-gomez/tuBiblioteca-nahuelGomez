import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import logoBiblio from "../imagenes/logoBiblio.png"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <Navbar className="" bg="light" expand="lg">
      <Container fluid>
      <img src= {logoBiblio} alt="" className="imgLogo"></img>
        <Link to="/" className='sinDecoracion'>Tu Bilbioteca</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/category/5" className='sinDecoracion'>Antiguos</Link>
            <Link to="/category/6" className='sinDecoracion'>Reflexivos</Link>
            <Link to="/category/7" className='sinDecoracion'>Historias</Link>                      
          </Nav>
          <Form className="d-flex loguearse">
            <Button variant="outline-success">Login</Button>            
            <Button variant="outline-success">Buscar</Button>
            <Link type="button" ><CartWidget /></Link>     
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
