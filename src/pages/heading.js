import "./heading.css";
import React from "react";
// import heading from "../assets/heading.jpg";
import upArrow from "../assets/arrow.png";
import briefImg from "../assets/brief-img.jpg";
import { Link } from "react-router-dom";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

function Heading() {
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
    // Heading
    <div className='heading'>
      <div className='heading-cont'>
        <div className='dark-overlay'></div>

        <p className='heading-quote'>
          {getText(translations, "homeHeadingQuote")}
        </p>

        <div>
          <Link className='link-menu' to='/consultanta' onClick={moveToTop}>
            <button className='btn-heading btn-hover'>
              {getText(translations, "btnHeadingText")}
            </button>
          </Link>
        </div>
      </div>

      {/* stats-column */}
      <div className='stats-column'>
        <div className='stats-row'>
          <p className='heading-stats-number'>121</p>
          <p className='heading-stats-title'>
            {getText(translations, "headingStatsTitles1")}
          </p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>779</p>
          <p className='heading-stats-title'>
            {" "}
            {getText(translations, "headingStatsTitles2")}
          </p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>2750</p>
          <p className='heading-stats-title'>
            {" "}
            {getText(translations, "headingStatsTitles3")}
          </p>
        </div>
        <div className='stats-row'>
          <p className='heading-stats-number'>547</p>
          <p className='heading-stats-title'>
            {" "}
            {getText(translations, "headingStatsTitles4")}
          </p>
        </div>
      </div>

      <div className='brief'>
        <div className='first-brief'>
          <img className='brief-img' src={briefImg} alt='' />
        </div>
        <div className='second-brief'>
          <div>
            <p className='brief-heading'>
              {/* Consultanță Juridică */}
              {getText(translations, "briefHeadingHeading")}
            </p>
            <div className='line-dec'></div>
            <div className='brief-text'>
              <p>{getText(translations, "briefHeadingText1")}</p>
              <p>{getText(translations, "briefHeadingText2")}</p>
              <p>{getText(translations, "briefHeadingText3")}</p>
            </div>
            <div className='brief-btn'>
              <Link className='link-menu' to='/consultanta' onClick={moveToTop}>
                <button className='brief-btn-2 btn-hover'>
                  {getText(translations, "briefHeadingButton")}
                </button>
              </Link>
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

export default Heading;
