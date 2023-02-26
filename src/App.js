// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  let carrito = [];

  return (
    <div className="App">
      <header>
        <Navbar
        numItems={carrito.length}
        />
      </header>
      <ItemListContainer
      greeting={"Bienvenido a Wolf Informatica, Centro de reparaciones lider en el Litoral Norte"}
      />
    </div>
  );
}

export default App;