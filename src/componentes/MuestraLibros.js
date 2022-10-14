import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const MuestraLibros = (props) => {    
    
  return (      
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.tapa} className='mgCard'/>
            <Card.Body className=''>
                <Card.Title><h4>"{props.nombre}"</h4></Card.Title>
                <Card.Title><h5>{props.autor}</h5></Card.Title>
                <Card.Text>Precio: ${props.precio}<br></br></Card.Text>                
                <Link to= {`/productos/${props.idItemBD}`} ><Button variant="primary">Ver detalles</Button></Link><br></br><br></br>
                <Button variant="primary"  >Agregar al Carrito</Button> 
            </Card.Body>
        </Card>                 
        );
}

export default MuestraLibros;

