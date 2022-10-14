import MuestraLibros from "../MuestraLibros"
import { useState, useEffect } from "react";
import arrayDatadeBasedeDatos from "../../utilitys/BasedeDatos"
import consultaPromesa from "../../utilitys/Promesas"
import { useParams } from "react-router-dom";


const ArrayLibros = () => {
    const [dataLibros, setDataLibros] = useState ([])
    const {idCategoryDOM} = useParams ()
    const [loading, setLoading] = useState(true)   
    
    useEffect(() => {
        if (idCategoryDOM) {
            consultaPromesa(2000, arrayDatadeBasedeDatos)
                .then(result => {
                    setDataLibros(arrayDatadeBasedeDatos.filter(item => item.idCategoryBD === +idCategoryDOM))
                    setLoading(false)})
                .catch(err => console.log(err))
                                                          
        }else { 
            consultaPromesa(2000, arrayDatadeBasedeDatos)
                .then(result => {
                    setDataLibros(arrayDatadeBasedeDatos)
                    setLoading(false)})
                .catch(err => console.log(err))
                                 
        }
        
    }, [idCategoryDOM])
    
    return (
        <>
            <div className="ventaLibros" > {loading ? <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"></img> :                
                    <div className="cuadritoMuestras">                    
                        {dataLibros.map(itemLibro => (
                            <MuestraLibros 
                                key={itemLibro.id}
                                nombre= {itemLibro.nombre}
                                autor= {itemLibro.autor}
                                editorial= {itemLibro.editorial}
                                añoEdicion={itemLibro.añoEdicion}
                                genero={itemLibro.genero}
                                precio={itemLibro.precio}
                                tapa={itemLibro.tapa}
                                idItemBD= {itemLibro.idItemBD} />))}
                    </div> }
            </div> <br></br> 
        </>
    );
}
export default ArrayLibros


/* useEffect(() =>{ // este efecto se usa para montar el contenido en el DOM
    // se debe consultar, por buenas practicas a la base de datos en esta funcion useEffect
   consultaPromesa (2000, arrayDatadeBasedeDatos)
       .them(datos => setData(arrayDatadeBasedeDatos))
       .catch(err => console.log(err))
    // una vez obtenida la base de datos aplicamos en la data que se usa para mapear
}, []) */