import './App.css';
import Menu from './menu/menu';
import Heading from './pages/heading';
import Servicii from './pages/servicii';
import Echipa from './pages/echipa';
import Subsol from './pages/subsol';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Menu />
      <Heading />
      <Servicii />
      <Echipa />
      <Contact />
      <Subsol />
    </div>
  );
}

export default App;
