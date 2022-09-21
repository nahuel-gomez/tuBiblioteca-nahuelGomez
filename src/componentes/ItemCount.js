import { useState } from "react"
import Button from 'react-bootstrap/Button';


const ContadorCarrito = (props) => {
    const [rate, setRate] = useState (0) 

    const hidenClickSumar = () => {
        setRate (rate + 1)
        if (rate === props.stock) {
            setRate (rate)
        }
    } 

    const hidenClickRestar = () => {
        setRate (rate - 1)
        if (rate === 0) {
            setRate (rate)
        }
    } 
    
    return (
        <>   
            <div className="contadorCarrito">
                <Button variant="outline-success" onClick={hidenClickRestar}> - </Button>                                        
                <h3> {rate} </h3>
                <Button variant="outline-success" onClick={hidenClickSumar}> + </Button>                
                <Button variant="primary"onClick={() => props.onAdd(rate)} disabled={rate <= 0}>Agregar al carrito</Button>                     
            </div>
        </>
    )
}

export default ContadorCarrito