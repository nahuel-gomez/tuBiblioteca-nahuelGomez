import { createContext, useState } from "react";

export const CarritoContext =  createContext()  // se crea el contexto global del carrito para que lo pueda leer toda la app

const CarritoContexProvider = ({children}) => { 
   
    const [cartList, seTCartList] = useState([]) //declaramos el estado global en uno locar con useState en array vacio 

    const addItem = (producto, newcantidad) => { // para agregar items al carrito como funcion global       
        
        let consultaProducto = cartList.find(e => e.id === producto.id) // busca si ya hay un producto un mismo porducto
        
        if (consultaProducto){ // si es verdad que sólo sume su cantidad al item
            consultaProducto.newcantidad += newcantidad
            seTCartList([...cartList])
        }else { // caso contrario que lo agregue
            seTCartList([...cartList, {...producto, newcantidad}])
        }        
    }
    
    const clearAll = () => {  // vaciar el carrito
        seTCartList([])
    }

    const removeItem = (id) => { //eliminar item
        seTCartList(cartList.filter(item => item.id !== id))        
    }

     const calcItemsQty = () => {
        let acumuladorContador = cartList.map(item => item.newcantidad)  // contador o sumador de items en el carrito
        return acumuladorContador.reduce(((previo, actual) => previo + actual), 0)
    }


    return(
        <CarritoContext.Provider value={{cartList, addItem, clearAll, removeItem, calcItemsQty}}>
            { children }
        </CarritoContext.Provider>
    )
}

export default CarritoContexProvider 