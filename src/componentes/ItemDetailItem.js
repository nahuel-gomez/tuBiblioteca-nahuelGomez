import ContadorCarrito from "./ItemCount";
import { useState, useEffect } from "react";
import arrayDatadeBasedeDatos from "../utilitys/BasedeDatos"
import consultaPromesa from "../utilitys/Promesas"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'; 
import { useContext } from "react"
import { CarritoContext } from "./containers/CartContext"


const ItemDetailItem = () => {
    const [count, setCount] = useState (0)

    const cartcontexto = useContext(CarritoContext)
    const onAdd = (contador) => {
        alert(`Su carrito tiene ${contador} productos`)
        setCount(contador)
        cartcontexto.addItem (dataLibros, contador)
        cartcontexto.calcItemsQty()                          
    }
    
    const [dataLibros, setDataLibro] = useState ({})

    const {idItemDOM} = useParams ()
    
    useEffect(() => {
        if (idItemDOM) {
            consultaPromesa(200, arrayDatadeBasedeDatos.find(item => item.idItemBD === +idItemDOM))
            .then(result => setDataLibro(result))
            .catch(err => console.log(err))
        }else {
        <p>No se ha encotrado</p>
        }
    },[idItemDOM])   

    return (
        <>
            <div className="cardGigante">
                <div className="tapaLibroGig">
                    <img src={dataLibros.tapa} alt="" className="imgTapaGig"></img>
                </div>
                <div className="textoGig">
                    <h1>{dataLibros.nombre}</h1>
                    <h2>{dataLibros.autor}</h2>
                    <p>Editorial: {dataLibros.editorial}</p>
                    <p>Género: {dataLibros.genero}</p>
                    <p>{dataLibros.descripcion}</p>
                    <p>Año: {dataLibros.añoEdicion}</p>
                    <p>Precio: $ {dataLibros.precio}</p>
                        {
                            count === 0
                            ? <ContadorCarrito stock={dataLibros.stock}  onAdd={onAdd}/>
                            : <Link to="/carrito/"><Button variant="danger">Revisa el carrito</Button></Link>
                        }
                </div>

            </div>

        </>
    )
}

export default ItemDetailItem