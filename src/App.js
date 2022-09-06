import "./App.css";

const App = () => {
  return (
    <header>
        <nav> 
          <div className="logo">
                 <h2>Tu Biblio</h2>
          </div>          
          <div className="navegacion">                
                <ul>
                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="paginas/productos.html">PRODUCTOS</a></li>
                    <li><a href="paginas/sabias_que.html">SABIAS QUE</a></li>
                    <li><a href="paginas/sobre_nosotros.html">SOBRE NOSOTROS</a></li>
                    <li><a href="paginas/contacto.html">CONTACTO</a></li>
                </ul>
          </div> 

          <div className="loguearse"> 
              <input type="text" placeholder="Buscar"></input>    
              <button type="button" className="botonLogin">Login</button>
              <button type="button" className="botonCarrito">Carrito</button>                
          </div>              
        </nav>
    </header>
  )
}

export default App