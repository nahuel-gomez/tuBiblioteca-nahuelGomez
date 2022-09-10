import "./App.css";
import NavBar  from "./componentes/Header";
import Comprar from "./componentes/Comprar";
import Vender from "./componentes/Vender";
import ContadorCarrito from "./componentes/ItemCount";

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
          <aside>
            <Comprar 
              horario = "De mañana"
              atiende = "Sergio Sigal"
              formasPago = "Efectivo, MP"/>
            <Vender
              horario = "De tarde"
              atiende = "Nelson Vivas"
              formasPago = "Tarjetas Visa solamente"/>
          </aside>
          <ContadorCarrito conteoStart={1} stock={5} OnAdd={OnAdd}/>          
        </body>
      </>
  )
}

export default App