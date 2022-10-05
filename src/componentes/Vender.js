import venderLibros from "../imagenes/Libros_de_segunda_mano.jpg"
import { Link } from "react-router-dom";

const Vender = (props) => {
    return (
      <>
        <div className="botonAcceso">
            <figure>
                <img src= {venderLibros} alt="" className="imgTarjeta"></img>
                <div className="capa">
                    <Link ><h2>Vender</h2></Link>
                    <h4>Horario: {props.horario}</h4>
                    <h4>Atiende: {props.atiende}</h4> 
                    <h4>Formas de pago: {props.formasPago}</h4>                                         
                </div>      
            </figure> 
        </div>
      </>
    )
  }

export default Vender