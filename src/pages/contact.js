import "./contact.css";
import contact from "../assetsMin/contact.jpg";

import translationsRO from "../lang/data-ro.js";
import translationsDE from "../lang/data-de.js";
import { useLanguage } from "../lang/LanguageContext";

const Contact = () => {
  const { getText, language } = useLanguage();

  let translations;
  if (language === "ro") {
    translations = translationsRO;
  } else if (language === "de") {
    translations = translationsDE;
  }

  return (
    <div>
      <div className='contact-img-cont'>
        <img className='contact-img' src={contact} alt='contact' loading="lazy" decoding="async" />
      </div>
      <div className='contact-form'>
        <p className='contact-heading'>
          {getText(translations, "contactTitle")}
        </p>
        <div className='line-dec-cont'></div>
        <div className='form-cont'>
          <p className='text-cont' >{getText(translations, "contactText")}</p>
          <p className='text-cont' >{getText(translations, "contactText1")}</p>
          <p className='text-cont' >{getText(translations, "contactText2")}</p>
          <br/>
          <p className='text-cont' >{getText(translations, "contactText3")}</p>
          <p className='text-cont'>
            0040/731579043
          </p>
          <p className="text-cont">
          <a href='mailto:office@consult-juridic.eu' style={{color: "#c1a267", textDecoration: "none"}}>
            office@consult-juridic.eu
          </a>
          </p>
          <p className='text-cont' >{getText(translations, "contactText4")}</p>
          <p className='text-cont' >
            0049/17631234232
          </p>
          <p className="text-cont">
          <a href='mailto:office@consult-juridic.eu' style={{color: "#c1a267" , textDecoration: "none"}}>
            office@consult-juridic.eu
          </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
