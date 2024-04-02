import "./despreNoi.css";
import despre2 from "../assetsMin/despre2.jpg";
import upArrow from "../assets/arrow.png";
import React from "react";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

function Despre() {
  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

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
      <div className='heading-cont-despre' data-aos='fade'>
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
        <p className='despre-heading' data-aos='fade-up'>
          {" "}
          {getText(translations, "despreNoiTitle")}
        </p>
        <div className='line-dec-ver-despre' data-aos='fade-up'></div>
        <div className='text-despre'>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText1")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText2")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText3")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText4")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText5")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText6")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText7")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText8")}
          </p>
          <p className='despre-p' data-aos='fade-up'>
            {getText(translations, "despreNoiText9")}
          </p>
        </div>
        <div className='brief-despre-noi'>
          <div className='first-brief' data-aos='fade-up'>
            <img className='brief-img despre-img' src={despre2} alt='' />
          </div>
          <div className='second-brief second-brief-despre' data-aos='fade-up'>
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
