import './App.css';
import Menu from './menu/menu';
import Heading from './pages/heading';
import Servicii from './pages/servicii';
import Echipa from './pages/echipa';
import Subsol from './pages/subsol';
import Contact from './pages/contact';
import {CookieConsent} from "react-cookie-consent";

function App() {
  return (
    <div className="App">
        <CookieConsent
            location="bottom"
            buttonText="Sunt de acord"
            cookieName="myAwesomeCookieName2"
            style={{ background: "black" }}
            buttonStyle={{ color: "white", fontSize: "16px", backgroundColor: 'transparent', borderColor: '#c1a267' , border: '1px solid #c1a267', marginTop: '0px'}}
            expires={150}
            containerClasses="cont-cookie"
        >
            <p className="p-cookies">Acest site web folosește cookie-uri pentru a îmbunătăți experiența utilizatorului.</p>
            {/*<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>*/}
        </CookieConsent>
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
