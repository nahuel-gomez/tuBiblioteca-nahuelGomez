import { BsCart3 } from "react-icons/bs";
import { useContext } from "react"
import { CarritoContext } from "./containers/CartContext"


const CartWidget = (props) => {
    const contexto = useContext(CarritoContext)   

    return (
       <div className="botonCarrito">        
            <div className="Contadoricito"><b>{contexto.calcItemsQty()}</b></div>  
            <h1><BsCart3/></h1>
        </div>
    )
}

export default CartWidget