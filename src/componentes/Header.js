import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import logoBiblio from "../imagenes/logoBiblio.png"

function NavBar() {
  return (
    <Navbar class="" bg="light" expand="lg">
      <Container fluid>
      <img src= {logoBiblio} alt="" className="imgLogo"></img>
        <Navbar.Brand href="#">Tu Bilbioteca</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex loguearse">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            <a type="button" ><CartWidget /></a>     
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;





































/* import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <>
       <nav> 
            <div className="logo">
                   <h2>Tu Biblio</h2>
            </div>          
            <div className="navegacion">                
                  <ul>
                      <li><a href="index.html">INICIO</a></li>
                      <li><a href="paginas/productos.html">PRODUCTOS</a></li>
                      <li><a href="paginas/sabias_que.html">SABIAS QUE</a></li>
                      <li><a href="paginas/sobre_nosotros.html">SOBRE NOSOTROS</a></li>
                      <li><a href="paginas/contacto.html">CONTACTO</a></li>
                  </ul>
            </div> 
  
            <div className="loguearse"> 
                <input type="text" placeholder="Buscar"></input>    
                <button type="button" className="botonLogin">Login</button>
                <a type="button" ><CartWidget /></a>                
            </div>              
          </nav> 
      </>
    )
  }

export default NavBar */