import comprarlibros from "../imagenes/comprarLibros.jpg"
import { Link } from "react-router-dom";

const Comprar = (props) => {
    return (
      <>
        <div className="botonAcceso">
            <figure>
                <img src= {comprarlibros} alt="" className="imgTarjeta"></img>
                <div className="capa">
                    <Link><h2>Comprar</h2></Link>
                    <h4>Horario: {props.horario}</h4>
                    <h4>Atiende: {props.atiende}</h4> 
                    <h4>Formas de pago: {props.formasPago}</h4>                       
                </div>      
            </figure> 
        </div>
      </>
    )
  }

export default Comprar