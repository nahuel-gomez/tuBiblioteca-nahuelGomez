import { createContext, useState } from "react";

export const CarritoContext =  createContext()  // se crea el contexto global del carrito para que lo pueda leer toda la app

const CarritoContexProvider = ({children}) => { 
   
    const [cartList, seTCartList] = useState([]) //declaramos el estado global en uno locar con useState en array vacio 

    const addItem = (producto, newcantidad) => { // para agregar items al carrito como funcion global
        
        console.log("antes del set", cartList)
        seTCartList([{...producto, newcantidad}])
        console.log("despues del set", cartList)
        
        
    }
    
    const clearAll = () => {  // vaciar el carrito
        seTCartList([])
    }

    const removeItem = (id) => { //eliminar item
        seTCartList(cartList.filter(item => item.id !== id))        
    }

    return(
        <CarritoContext.Provider value={{cartList, addItem, clearAll, removeItem}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContexProvider 