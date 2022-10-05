import "./App.css";
import NavBar  from "./componentes/Header";
/* import Comprar from "./componentes/Comprar";
import Vender from "./componentes/Vender";
import ContadorCarrito from "./componentes/ItemCount"; */
import ArrayLibros from "./componentes/containers/ArrayLibros"; 
import ItemDetailItem  from "./componentes/ItemDetailItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import elCarrito from "./componentes/Carrito"; */
import ElCarrito from "./componentes/Carrito";
/* import { CarritoContext } from "./componentes/containers/CartContext"; */
import CarritoContexProvider from "./componentes/containers/CartContext";

const App = () => {
  
  /* const OnAdd = (cantidad) => {
    alert(`Usted tiene ${cantidad} en el carrito`)
  } */
 
  return(
      <CarritoContexProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ArrayLibros/>}/>
                <Route path="/productos/:idItemDOM" element={<ItemDetailItem/>}/>
                <Route path="/category/:idCategoryDOM" element={<ArrayLibros/>}/>
                <Route path="*" element={<img src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg"></img>}/> 
                <Route path="/carrito/" element={<ElCarrito/>}/>             
            </Routes>
        </BrowserRouter>        
      </CarritoContexProvider>
        )
}

export default App




     /*  <>
        <body>
          <header>
            
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
                                
          <ContadorCarrito conteoStart={1} stock={5} OnAdd={OnAdd}/><br></br>
        <ItemDetailItem/>   
        </body>
  </> */


