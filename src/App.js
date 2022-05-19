import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import {CartProvider} from "react-use-cart"
import { Routes, Route } from "react-router-dom";
import PgCart from './Components/PgCart';

function App() {
  return (
    <div className="App"  >
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Main />} />
          <Route path="/cart" element={<PgCart/>} />
      </Routes>
      </CartProvider>
    </div>

  );
}

export default App;
