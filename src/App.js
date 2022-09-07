import "./App.css";
import NavBar  from "./Header";
import Comprar from "./Comprar";
import Vender from "./Vender";

const App = () => {
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
        </body>
      </>
  )
}

export default App