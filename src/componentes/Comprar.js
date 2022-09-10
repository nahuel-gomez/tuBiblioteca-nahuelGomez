import comprarlibros from "../imagenes/comprarLibros.jpg"

const Comprar = (props) => {
    return (
      <>
        <div className="botonAcceso">
            <figure>
                <img src= {comprarlibros} alt="" className="imgTarjeta"></img>
                <div className="capa">
                    <a href=""><h2>Comprar</h2></a>
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