import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Menu from "./menu/menu";
import Subsol from "./pages/subsol";
import LoadingScreen from "./pages/LoadingScreen";
import {LanguageProvider} from "./lang/LanguageContext";
import CookieConsent from "./components/CookieConsent";
import TrackingTags from "./components/TrackingTags";

// Lazy loading pentru optimizare performanță
const Heading = lazy(() => import("./pages/heading"));
const Servicii = lazy(() => import("./pages/servicii"));
const Echipa = lazy(() => import("./pages/echipa"));
const Contact = lazy(() => import("./pages/contact"));
const Despre = lazy(() => import("./pages/despreNoi"));
const Consultanta = lazy(() => import("./pages/consultanta"));
const Payment = lazy(() => import("./pages/formPayment"));
const Terms = lazy(() => import("./pages/terms"));
const Cookies = lazy(() => import("./pages/cookies"));
const Soon = lazy(() => import("./pages/soon"));
const ContactForm = lazy(() => import("./pages/contactForm"));
const Multumire = lazy(() => import("./pages/Multumire"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className='App'>
          {/*<CookieConsent*/}
          {/*  location='bottom'*/}
          {/*  buttonText='Sunt de acord'*/}
          {/*  cookieName='myAwesomeCookieName2'*/}
          {/*  style={{ background: "black" }}*/}
          {/*  buttonStyle={{*/}
          {/*    color: "white",*/}
          {/*    fontSize: "16px",*/}
          {/*    backgroundColor: "transparent",*/}
          {/*    borderColor: "#c1a267",*/}
          {/*    border: "1px solid #c1a267",*/}
          {/*    marginTop: "0px",*/}
          {/*  }}*/}
          {/*  expires={150}*/}
          {/*  containerClasses='cont-cookie'*/}
          {/*>*/}
          {/*  <p className='p-cookies'>*/}
          {/*    Acest site web folosește cookie-uri pentru a îmbunătăți experiența*/}
          {/*    utilizatorului.*/}
          {/*  </p>*/}
          {/*  /!*<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>*!/*/}
          {/*</CookieConsent>*/}
          <Menu />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {loading ? (
                <Route index element={<LoadingScreen />} />
              ) : (
                <Route index element={<Homepage />} />
              )}
              <Route path='/website-juridic' element={<Homepage />} />
              <Route path='/despre/noi' element={<Despre />} />
              <Route path='/contact/form' element={<ContactForm />} />
              <Route path='/consultanta' element={<Consultanta />} />
              <Route path='/termeni/si/conditii' element={<Terms />} />
              <Route path='/politica/cookies' element={<Cookies />} />
              <Route path='/secure/payment/completed' element={<Payment />} />
              <Route path="/multumire" element={<Multumire />} />
            </Routes>
          </Suspense>
          <Subsol />
          <CookieConsent />
          <TrackingTags />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

// Componenta pentru homepage
function Homepage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Heading />
      <Servicii />
      <Echipa />
      <Contact />
    </Suspense>
  );
}

export default App;
