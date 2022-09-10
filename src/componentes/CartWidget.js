import { BsCart3 } from "react-icons/bs";



const CartWidget = (props) => {
    return (
       <div className="botonCarrito">
            <div className="Contadoricito">0</div>  
            <h1><BsCart3/></h1>
        </div>
    )
}

export default CartWidget