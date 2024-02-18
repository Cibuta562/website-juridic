import logo from './logo.svg';
import './App.css';
import Menu from "./menu/menu";
import Heading from "./pages/heading";
import Servicii from "./pages/servicii";
import Echipa from "./pages/echipa";
import Contact from "./assets/contact";

function App() {
  return (
    <div className="App">
       <Menu/>
        <Heading/>
        <Servicii/>
        <Echipa/>
        <Contact/>
    </div>
  );
}

export default App;
