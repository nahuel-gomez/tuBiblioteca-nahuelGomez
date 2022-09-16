import { useState } from "react"


const ContadorCarrito = (props) => {
    const [rate, setRate] = useState (1) 

    const hidenClickSumar = () => {
        setRate (rate + 1)
        if (rate === props.stock) {
            setRate (rate)
        }
    } 

    const hidenClickRestar = () => {
        setRate (rate - 1)
        if (rate === 1) {
            setRate (rate)
        }
    } 
    
    return (
        <>   
            <div className="contadorCarrito">
                <button className="botons" onClick={hidenClickRestar} ><h1> - </h1></button>                
                <h1> {rate} </h1>
                <button className="botons" onClick={hidenClickSumar}><h1> + </h1></button>
                <button onClick={() => props.OnAdd(rate)} > Agregar al Carrito </button>
            </div>
        </>
    )
}

export default ContadorCarrito