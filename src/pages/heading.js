import "./heading.css";
import heading from "../assets/heading.jpg";
import upArrow from "../assets/arrow.png";
import briefImg from "../assets/brief-img.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";

function Heading() {
  // const [language, setLanguage] = useState("ro"); // Limba implicită este româna
  // const getText = (key) => {
  //   // Verificați limba selectată și returnați textul corespunzător din obiectul de traducere
  //   if (language === "ro") {
  //     return translationsRO[key] || "";
  //   } else if (language === "de") {
  //     return translationsDE[key] || "";
  //   } else {
  //     console.log("Limba nerecunoscuta sau neselectata");
  //     return ""; // În cazul în care limba nu este recunoscută, returnăm un șir gol
  //   }
  // };
  function moveToTop() {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className='heading'>
      <div className='heading-cont'>
        <div className='dark-overlay'></div>

        <p className='heading-quote'>
          UN DREPT NEDOVEDIT ESTE PRECUM UN DREPT INEXISTENT
          {/* {getText("homeHeadingQuote")} */}
        </p>

        <div>
          <Link className='link-menu' to='/consultanta' onClick={moveToTop}>
            <button className='btn-heading btn-hover'>
              Consultanță Online
            </button>
          </Link>
        </div>

        <button className='btn-top' onClick={moveToTop}>
          <img className='img-arrow' src={upArrow} alt={"btn-top"} />
        </button>
      </div>

      <div className='stats-column'>
        <div className='stats-row'>
          <p className='heading-stats-number'>121</p>
          <p className='heading-stats-title'>Colaboratori externi</p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>779</p>
          <p className='heading-stats-title'>Clienți</p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>2750</p>
          <p className='heading-stats-title'>Cauze Instrumentate</p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>547</p>
          <p className='heading-stats-title'>Seminarii si Stagii</p>
        </div>
      </div>

      <div className='brief'>
        <div className='first-brief'>
          <img className='brief-img' src={briefImg} />
        </div>
        <div className='second-brief'>
          <div>
            <p className='brief-heading' style={{ paddingLeft: "0px" }}>
              Consultanță Juridică
            </p>
            <div className='line-dec'></div>
            <div className='brief-text'>
              <p>
                Asigurăm asistență juridică de specialitate atât în drept german
                cât și în drept român.
              </p>
              <p>
                Pe site-ul nostru puteţi obţine rapid şi ieftin consultaţii
                juridice online privind dreptul german sau dreptul românesc.
              </p>
              <p>
                {" "}
                Astfel, evitați timpul pierdut cu programarea întâlnirii la
                birou, cu deplasarea și mai ales nu mai este nevoie să vă
                învoiți de la serviciu.
              </p>
            </div>
            <div className='brief-btn'>
              {/*<button className="brief-btn-1">*/}
              {/*    Contacteaza-ne >*/}
              {/*</button>*/}
              <Link className='link-menu' to='/consultanta' onClick={moveToTop}>
                <button className='brief-btn-2 btn-hover'>
                  Consult Juridic Online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
