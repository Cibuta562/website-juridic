import "./terms.css";
import React from "react";
import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const Terms = () => {
  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div className='terms-cont' data-aos='fade'>
      <p className='terms-heading'>{getText(translations, "termsTitle")}</p>
      <div className='dec-line-terms'></div>

      <p className='terms-heading'>{getText(translations, "termsSection1Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection1Text")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsEntity")}</strong> {getText(translations, "termsEntityName")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsAddress")}</strong> {getText(translations, "termsAddressValue")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsContact")}</strong> {getText(translations, "termsContactValue")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection2Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        <strong>{getText(translations, "termsSite")}</strong> {getText(translations, "termsSiteValue")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsUser")}</strong> {getText(translations, "termsUserValue")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsService")}</strong> {getText(translations, "termsServiceValue")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection3Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection3Text1")}
      </p>
      <p className='terms-text'>
        {getText(translations, "termsSection3Text2")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection4Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        <strong>{getText(translations, "termsSection4Subtitle1")}</strong> {getText(translations, "termsSection4Text1")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsSection4Subtitle2")}</strong> {getText(translations, "termsSection4Text2")}
      </p>
      <p className='terms-text'>
        <strong>{getText(translations, "termsSection4Subtitle3")}</strong> {getText(translations, "termsSection4Text3")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection5Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection5Text1")}
      </p>
      <p className='terms-text'>
        {getText(translations, "termsSection5Text2")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection6Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection6Text")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection7Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection7Text")}
      </p>

      <p className='terms-heading'>{getText(translations, "termsSection8Title")}</p>
      <div className='dec-line-terms'></div>
      <p className='terms-text'>
        {getText(translations, "termsSection8Text")}
      </p>
    </div>
  );
};

export default Terms;
