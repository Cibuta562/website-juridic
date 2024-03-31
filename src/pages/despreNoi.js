import "./despreNoi.css";
import despre2 from "../assets/despre2.jpg";
import upArrow from "../assets/arrow.png";
import React from "react";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

function Despre() {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }

  // functie pentru derularea la inceputul paginii
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
    <div style={{ backgroundColor: "black" }}>
      <div className='heading-cont-despre'>
        <div className='dark-overlay'></div>

        <p className='heading-quote-despre'>
          {getText(translations, "despreNoiHeading")}
        </p>
        <p className='heading-quote-despre1'>
          {" "}
          {getText(translations, "despreNoiSubtitle")}
        </p>
      </div>
      <div className='despreCont-text'>
        <p className='despre-heading'>
          {" "}
          {getText(translations, "despreNoiTitle")}
        </p>
        <div className='line-dec-ver-despre'></div>
        <div className='text-despre'>
          <p className='despre-p'>{getText(translations, "despreNoiText1")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText2")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText3")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText4")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText5")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText6")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText7")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText8")}</p>
          <p className='despre-p'>{getText(translations, "despreNoiText9")}</p>
        </div>
        <div className='brief-despre-noi'>
          <div className='first-brief'>
            <img className='brief-img despre-img' src={despre2} alt='' />
          </div>
          <div className='second-brief second-brief-despre'>
            <div>
              <div className='briefText'>
                <p>{getText(translations, "despreNoiText10")}</p>
                <p>{getText(translations, "despreNoiText11")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn-top' onClick={moveToTop}>
        <img className='img-arrow' src={upArrow} alt={"btn-top"} />
      </button>
    </div>
  );
}

export default Despre;
