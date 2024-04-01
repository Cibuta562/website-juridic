import "./consultanta.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import upArrow from "../assets/arrow.png";

import translationsRO from "../lang/data-ro.js"; // obiect de traducere RO
import translationsDE from "../lang/data-de.js"; // obict de traducere GER
import { useLanguage } from "../lang/LanguageContext"; // hook pentru LanguageContext

function Consultanta() {
  // Importă hook-ul useLanguage pentru a accesa contextul limbii și funcțiile asociate
  const { getText, language } = useLanguage();

  // Alege fișierul de traducere corespunzător limbii selectate
  let translations;
  if (language === "ro") {
    translations = translationsRO; // foloseste textul in RO
  } else if (language === "de") {
    translations = translationsDE; // foloseste textul in GER
  }

  const targetConsultantaOnline = useRef(null);

  const scrollToConsultantaOnline = () => {
    targetConsultantaOnline.current.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className='heading-cont-consultanta'>
        <div className='dark-overlay'></div>

        <p className='heading-quote-consultanta'>
          {getText(translations, "consultantaHeading")}
        </p>

        <div>
          <Link className='link-menu' to='/consultanta'>
            <button
              className='btn-heading-consultanta btn-hover'
              onClick={scrollToConsultantaOnline}
            >
              {getText(translations, "btnHeadingText")}
            </button>
          </Link>
        </div>
      </div>
      <div className='consultanta-cont'>
        <div className='consultanta-desc-text'>
          <div className='consultanta-dec-text'>
            <p className='despre-p' style={{ paddingTop: "20px" }}>
              {getText(translations, "consultantaText1")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText2")}
            </p>
          </div>
          <div className='consultanta-dec'></div>
        </div>
        <div className='consultanta-desc-text2'>
          <p className='despre-p'>
            {getText(translations, "consultantaText3")}
          </p>
          <p className='despre-p'>
            {getText(translations, "consultantaText4")}
            <p style={{ fontWeight: "lighter", padding: "0", margin: "0" }}>
              {getText(translations, "consultantaText5")}
            </p>
          </p>
          <p className='despre-p'>
            {getText(translations, "consultantaText6")}
          </p>
          <div className='consultanta-dec2'></div>
        </div>
        <div className='despre-cont-text' ref={targetConsultantaOnline}>
          <p
            style={{ fontSize: "24px" }}
            className='despre-heading-consultanta'
          >
            {getText(translations, "consultantaText7")}
          </p>
          <div className='dec-consultanta'></div>
          <div className='text-despre-consultanta'>
            <p className='despre-p'>
              {getText(translations, "consultantaText8")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText9")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText10")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText11")}
              <span style={{ fontWeight: "lighter" }}>
                {getText(translations, "consultantaLizibil")}
              </span>
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText12")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText13")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText14")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText15")}
            </p>
            <p className='despre-p'>
              {getText(translations, "consultantaText16")}
            </p>
            <br />
            <a
              href='mailto:office@consult-juridic.eu'
              style={{ textDecoration: "none", color: "black" }}
            >
              <button className='btn-contact-consultanta btn-hover'>
                <a
                  href='https://buy.stripe.com/14kaHN0jn5u98s8aEF'
                  target='_blank'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {getText(translations, "consultantaTrimiteEmail")}
                </a>
              </button>
            </a>
          </div>
        </div>
      </div>
      <button className='btn-top' onClick={moveToTop}>
        <img className='img-arrow' src={upArrow} alt={"btn-top"} />
      </button>
      {/* <Subsol /> */}
    </div>
  );
}

export default Consultanta;
