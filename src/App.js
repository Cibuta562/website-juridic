import "./App.css";
import React from "react";
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

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <Routes>
            {/* <Route path='/' element={<Soon />} /> */}
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
