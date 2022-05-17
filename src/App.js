import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import {CartProvider} from "react-use-cart"

function App() {
  return (
    <div className="App"  >
      <CartProvider>
      <Navbar/>
      <Main/>
      </CartProvider>
    </div>
  );
}

export default App;
/* </div>  <header className="App-header">
       //</header> <img src={logo} className="App-logo" alt="logo" />
       // <p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
         // className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        
       // </a>
  </header>*/