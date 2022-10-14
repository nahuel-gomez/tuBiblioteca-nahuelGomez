import { useContext } from "react"
import { CarritoContext } from "./containers/CartContext"
import ListadelCarrito from "./ListadelCarrito"
import Button from 'react-bootstrap/Button'

const ElCarrito = () => {
     
    const contexto = useContext(CarritoContext)    
    
    return(
        <div className="elCarrito">             
                {contexto.cartList.map((item, idx) => (
                    <ListadelCarrito
                        key={idx}                       
                        id={item.id}
                        nombre= {item.nombre}
                        autor= {item.autor}
                        editorial= {item.editorial}
                        añoEdicion={item.añoEdicion}
                        precio={item.precio}
                        tapa={item.tapa}
                        cantidad={item.newcantidad}                        
                        />
                ))} <br></br>               
                <Button className="quitarTodoCarrito" onClick={contexto.clearAll} variant="dark">Quitar todo del carrito</Button><br></br>
        </div>
    )
}

export default ElCarrito

