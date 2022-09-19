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
    <Navbar class="" bg="light" expand="lg">
      <Container fluid>
      <img src= {logoBiblio} alt="" className="imgLogo"></img>
        <Link to="/" className='sinDecoracion'><Navbar.Brand href="#">Tu Bilbioteca</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/category/5" className='sinDecoracion'><Nav.Link href="#action1">Antiguos</Nav.Link></Link>
            <Link to="/category/6" className='sinDecoracion'><Nav.Link href="#action1">Reflexivos</Nav.Link></Link>
            <Link to="/category/7" className='sinDecoracion'><Nav.Link href="#action1">Historias</Nav.Link></Link>                      
          </Nav>
          <Form className="d-flex loguearse">
            <Button variant="outline-success">Login</Button>            
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