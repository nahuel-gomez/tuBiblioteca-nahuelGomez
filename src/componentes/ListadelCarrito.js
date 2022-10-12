import Button from 'react-bootstrap/Button'
import { CarritoContext } from "./containers/CartContext"
import { useContext } from "react"



const ListadelCarrito = (props) => {
    const contexto = useContext(CarritoContext)    
   
    return(
        <>
        <div className="dentroDelCarrito">
                <div className="TapaLibroCarrito">
                    <img src={props.tapa} alt="" className="imgTapaGig"></img>
                </div>
                <div className="infoLibroCarrito"><br></br>
                    <h2>{props.nombre}</h2>
                    <h3>{props.autor}</h3>
                    <p>Editorial: {props.editorial}</p>
                    <p>Año: {props.añoEdicion}</p>
                </div>
                <div className="precioLibroCarrito">
                    <br></br><br></br>
                    <h4>$ {props.precio}</h4>
                    <h5>cantidad: {props.cantidad }</h5> <br></br>
                    <Button onClick={() => contexto.removeItem(props.id)} variant="dark">Quitar del carrito</Button>
                </div>      
        </div><br></br><hr></hr><br></br>     
        </>
    )
}

export default ListadelCarrito