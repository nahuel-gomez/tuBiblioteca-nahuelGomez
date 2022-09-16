import "./App.css";
import NavBar  from "./componentes/Header";
/* import Comprar from "./componentes/Comprar";
import Vender from "./componentes/Vender";
import ContadorCarrito from "./componentes/ItemCount";
import ArrayLibros from "./componentes/containers/ArrayLibros"; */
import ItemDetailItem  from "./componentes/ItemDetailItem";

const App = () => {
  
  const OnAdd = (cantidad) => {
    alert(`Usted tiene ${cantidad} en el carrito`)
  }
 
  return(
      <>
        <body>
          <header>
            <NavBar />
          </header>
          {/* <aside>
            <Comprar 
              horario = "De mañana"
              atiende = "Sergio Sigal"
              formasPago = "Efectivo, MP"/>
            <Vender
              horario = "De tarde"
              atiende = "Nelson Vivas"
              formasPago = "Tarjetas Visa solamente"/>
          </aside>
            <div className="ventaLibros" >
                <div className="tituloVenta">
                    <h2>¿Qué te gustaría leer?</h2>
                </div>
                <div className="cuadritoMuestras">
                    <ArrayLibros/>
                </div>
          </div><br></br>          
          <ContadorCarrito conteoStart={1} stock={5} OnAdd={OnAdd}/><br></br>*/}
          <ItemDetailItem/>    
        </body>
      </>
  )
}

export default App