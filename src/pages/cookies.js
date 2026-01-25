import "./cookies.css";
import React from "react";
import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const Cookies = () => {
  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div className='cookies-cont' data-aos='fade'>
      <p className='cookies-heading'>{getText(translations, "cookiesTitle")}</p>
      <div className='dec-line-cookies'></div>

      <p className='cookies-text'>
        {getText(translations, "cookiesIntro")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection1Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        {getText(translations, "cookiesSection1Text")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection2Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        <strong>{getText(translations, "cookiesEssentialTitle")}</strong>
      </p>
      <p className='cookies-text'>
        {getText(translations, "cookiesEssentialText")}
      </p>

      <p className='cookies-text'>
        <strong>{getText(translations, "cookiesAnalyticsTitle")}</strong>
      </p>
      <p className='cookies-text'>
        {getText(translations, "cookiesAnalyticsText")}
      </p>

      <p className='cookies-text'>
        <strong>{getText(translations, "cookiesFunctionalTitle")}</strong>
      </p>
      <p className='cookies-text'>
        {getText(translations, "cookiesFunctionalText")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection3Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        {getText(translations, "cookiesSection3Text")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection4Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        {getText(translations, "cookiesSection4Text")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection5Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        {getText(translations, "cookiesSection5Text")}
      </p>

      <p className='cookies-heading'>{getText(translations, "cookiesSection6Title")}</p>
      <div className='dec-line-cookies'></div>
      <p className='cookies-text'>
        {getText(translations, "cookiesSection6Text")}
      </p>
    </div>
  );
};

export default Cookies;
