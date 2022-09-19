import ContadorCarrito from "./ItemCount";
import { useState, useEffect } from "react";
import arrayDatadeBasedeDatos from "../utilitys/BasedeDatos"
import consultaPromesa from "../utilitys/Promesas"
import { useParams } from "react-router-dom";

const ItemDetailItem = () => {
    const [dataLibros, setDataLibro] = useState ({})
    const {idItemDOM} = useParams ()
    
    useEffect(() => {
        if (idItemDOM) {
            consultaPromesa(2000, arrayDatadeBasedeDatos)
            .then(result => setDataLibro(arrayDatadeBasedeDatos.find(item => item.idItemBD == idItemDOM)))
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
                    <ContadorCarrito stock={dataLibros.stock}/>
                </div>

            </div>

        </>
    )
}

export default ItemDetailItem