import "./App.css";
import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lang/LanguageContext";

import Menu from "./menu/menu";
import Subsol from "./pages/subsol";
import Heading from "./pages/heading";
import Servicii from "./pages/servicii";
import Echipa from "./pages/echipa";
import Contact from "./pages/contact";
import Despre from "./pages/despreNoi";
import Consultanta from "./pages/consultanta";
import Payment from "./pages/formPayment";
import Terms from "./pages/terms";
import Soon from "./pages/soon";

import { CookieConsent } from "react-cookie-consent";

function App() {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap";
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className='App'>
          <CookieConsent
            location='bottom'
            buttonText='Sunt de acord'
            cookieName='myAwesomeCookieName2'
            style={{ background: "black" }}
            buttonStyle={{
              color: "white",
              fontSize: "16px",
              backgroundColor: "transparent",
              borderColor: "#c1a267",
              border: "1px solid #c1a267",
              marginTop: "0px",
            }}
            expires={150}
            containerClasses='cont-cookie'
          >
            <p className='p-cookies'>
              Acest site web folosește cookie-uri pentru a îmbunătăți experiența
              utilizatorului.
            </p>
            {/*<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>*/}
          </CookieConsent>
          <Menu />
          <Routes>
            <Route index element={<Soon />} />
            <Route path='/website-juridic' element={<Homepage />} />
            <Route path='/despre/noi' element={<Despre />} />
            <Route path='/consultanta' element={<Consultanta />} />
            <Route path='/termeni/si/conditii' element={<Terms />} />
            <Route path='/secure/payment/completed' element={<Payment />} />
          </Routes>
          <Subsol />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

// Componenta pentru homepage

function Homepage() {
  return (
    <>
      <Heading />
      <Servicii />
      <Echipa />
      <Contact />
    </>
  );
}

export default App;
