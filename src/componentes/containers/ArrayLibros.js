import MuestraLibros from "../MuestraLibros"
import { useState, useEffect } from "react";
import arrayDatadeBasedeDatos from "../../utilitys/BasedeDatos"
import consultaPromesa from "../../utilitys/Promesas"


const ArrayLibros = () => {
    const [dataLibros, setDataLibro] = useState ([])
    
    useEffect(() => {
        consultaPromesa(7000, arrayDatadeBasedeDatos)
            .then(data => setDataLibro(arrayDatadeBasedeDatos))
            .catch(err => console.log(err))
    })
    
    return (
        <> 
            {                
                dataLibros.map(itemLibro => (
                        <MuestraLibros 
                            key={itemLibro.id}
                            nombre= {itemLibro.nombre}
                            autor= {itemLibro.autor}
                            editorial= {itemLibro.editorial}
                            añoEdicion={itemLibro.añoEdicion}
                            genero={itemLibro.genero}
                            precio={itemLibro.precio}
                            tapa={itemLibro.tapa} />))                
            }
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